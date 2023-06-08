<template>
    <!-- 上面的筛选 -->


    <div style="width: 95%;margin: 2% auto; overflow: hidden;">
        <!-- 筛选面板 -->
        <div class="col-md-12" data-plugin-portlet>
            <el-collapse v-model="activeNames">
                <el-collapse-item name="1">
                    <!-- 展示面板title -->
                    <template #title>
                        <el-icon>
                            <Search />
                        </el-icon>&nbsp; Search
                    </template>


                    <el-form ref="form" :model="filter" label-width="130px">
                        <div class="formRow1">

                            <el-form-item label="Pb_gene :">
                                <el-input v-model="filter.pb_gene" placeholder="e.g. ATP5F1C" clearable
                                    style="width: 70%;"></el-input>
                            </el-form-item>
                            <el-form-item label="Pb_ensembl :">
                                <el-input v-model="filter.pb_ensembl" placeholder="e.g. ENSG00000165629" clearable
                                    style="width: 85%;"></el-input>
                            </el-form-item>

                            <el-form-item label="n_sample range :">
                                <el-input v-model="filter.n_sample_greater" style="width: 80px;"></el-input>&nbsp-&nbsp
                                <el-input v-model="filter.n_sample_less" style="width: 80px;"></el-input>
                            </el-form-item>
                        </div>
                        <div class="formRow2">
                            <el-form-item label="Celline :">
                                <el-input v-model="filter.celline" placeholder="e.g. HepG2" clearable
                                    style="width: 70%;"></el-input>
                            </el-form-item>
                            <el-form-item label="Method :">
                                <el-select v-model="filter.method" placeholder="Please select the knockout method"
                                    style="width: 100%;">
                                    <!-- <el-option label= "RNAi_interference"  value="method"></el-option>
                        <el-option label="CRISPR_deletion" value="method"></el-option> -->
                                    <el-option v-for='item in methodList' :key='item' :label="item" :value="item">

                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="Datasource :">
                                <el-select v-model="filter.datasource" placeholder="Please select datasource"
                                    style="width: 80%;">
                                    <!-- <el-option label="ENCODE"  value="datasource"></el-option>
                        <el-option label="GEO"  value="datasource"></el-option> -->
                                    <el-option v-for='item in datasourceList' :key='item' :label="item" :value="item">

                                    </el-option>

                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="formRow3">
                            <el-form-item style="margin-left: -120px;">
                                <el-button type="success" @click="onSubmit" style="width: 100px;">Submit</el-button>
                                <el-button @click="onReset" style="margin-left: 100px;width: 100px;">Reset</el-button>
                            </el-form-item>
                        </div>
                    </el-form>

                </el-collapse-item>
            </el-collapse>
        </div>
    </div>

    <div style="width: 95%;margin: 1% auto; overflow: hidden;">
        <!-- 数据展示面板 -->
        <div class="col-md-12" data-plugin-portlet>
            <el-collapse v-model="activeNames">
                <el-collapse-item name="2">
                    <!-- 展示面板title -->
                    <template #title>
                        <i class="ti-layers"></i>&nbsp; Downstream Data Download <sup><span data-html="true"
                                data-toggle="tooltip" data-placement="right"
                                title="The meaning of columns is explained in the Help page."><i class="ti-info-alt"
                                    style="font-size: 70%"> </i></span></sup>
                    </template>


                    <!-- 表格展示 -->
                    <el-table :data="tableData" border stripe table-layout="auto" highlight-current-row ref="multipleTable"
                        @row-click="rowClick" header-cell-class-name="header-cell-class-name"
                        style="color: black;margin-top: 20px;">
                        <!-- prop是表头属性名 label是展示的列名 宽度不写就是自适应-->

                        <el-table-column prop="id" label="ID" align="center" />
                        <el-table-column prop="pb_gene" label="Pb_gene" align="center" />

                        <el-table-column prop="celline" label="Celline" align="center" />

                        <el-table-column prop="accession" label="Accession" align="center">
                            <template v-slot="scope">
                                <div v-html="scope.row.accession"></div>
                            </template>
                        </el-table-column>
                        <!-- <el-table-column prop="pb_ensembl" label="NarrowPeaks" align="center" />
                        <el-table-column prop="n_sample" label="DBA Obj" align="center" />
                        <el-table-column prop="datasource" label="Diff Footprint" align="center" /> -->
                        <el-table-column label="NarrowPeaks" align="center">
                            <template v-slot="scope">
                                <a href="javascript:;" @click="dlNarrowPeaks(scope.row)">
                                    <el-icon style="text-align: middle; vertical-align: -15%;">
                                        <Download />
                                    </el-icon>[tar]</a>
                            </template>
                        </el-table-column>
                        <el-table-column label="DBA Obj" align="center">
                            <template v-slot="scope">
                                <a href="javascript:;" @click="dlDBA(scope.row)">
                                    <el-icon style="text-align: middle; vertical-align: -15%;">
                                        <Download />
                                    </el-icon>[RData]</a>
                            </template>
                        </el-table-column>
                        <el-table-column label="Diff Footprint" align="center">
                            <template v-slot="scope">
                                <a href="javascript:;" @click="dlDiff(scope.row)">
                                    <el-icon style="text-align: middle; vertical-align: -15%;">
                                        <Download />
                                    </el-icon>[csv]</a>
                            </template>
                        </el-table-column>

                    </el-table>
                    <div class="table-foot" style="margin: 3vh auto;">
                        <div></div>

                        <!-- 分页 -->
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                            :current-page="currentPage" :page-sizes="[5, 10, 20]" :page-size="pageSize"
                            layout="total, sizes, prev, pager, next, jumper" :total="total">
                        </el-pagination>
                    </div>

                </el-collapse-item>
            </el-collapse>
        </div>

    </div>
</template>
  

<script >

import request from "@/utils/request";
import downloadFile from "@/utils/download";


export default {
    name: 'download',
    components: {


    },


    methods: {
        handleClick() {

        },
        load() {

            // 无需方法筛选
            request.get("/get_datasource_enum",
            ).then(res => {
                this.datasourceList = res.data;
            })
            request.get("/get_method_enum",
            ).then(res => {
                this.methodList = res.data;
            })


            request.post("/get_overall_data",
                {

                    filter: this.filter,
                    paging: this.paging

                }).then(res => {
                    this.tableData = res.data;
                    this.total = res.records_sum;

                })

        },
        onSubmit() {
            request.post("/get_overall_data",
                {
                    filter: this.filter,
                    paging: {
                        "start": 0, //起始数据点（分页）
                        "length": 10
                    }
                }).then(res => {

                    this.tableData = res.data;
                    this.total = res.records_sum;
                })
        },
        onReset() {
            this.filter = {}
        },


        handleSizeChange(val) {   //改变当前每页的个数触发
            this.pageSize = val
            this.paging.length = val
            this.load();
        },
        handleCurrentChange(val) {   //改变当前页码触发

            this.currentPage = val
            this.paging.start = (val - 1) * this.paging.length
            this.load();

        },

        // 下载NarrowPeaks函数
        dlNarrowPeaks(row) {
            let id = row.id;
            let pb_gene = row.pb_gene;
            let celline = row.celline;
            let href = `http://43.143.155.140/atac_db/${id}/narrowPeak/narrowPeaks.tar.gz`;
            let fileName = `id-${id}_${pb_gene}_${celline}_narrowPeaks.tar.gz`
            downloadFile(href, fileName)
        },
        // 下载DBA Obj函数
        dlDBA(row) {
            let id = row.id;
            let pb_gene = row.pb_gene;
            let celline = row.celline;
            let href = `http://43.143.155.140/atac_db/${id}/DBA/DBA_obj.tar.gz`;
            let fileName = `id-${id}_${pb_gene}_${celline}_DBA_obj.tar.gz`
            downloadFile(href, fileName)
        },
        // 下载Diff Footprint函数
        dlDiff(row) {
            let id = row.id;
            let pb_gene = row.pb_gene;
            let celline = row.celline;
            let href = `http://43.143.155.140/atac_db/${id}/csv/id-${id}_${pb_gene}_${celline}_diff_footprint.csv`;
            let fileName = `id-${id}_${pb_gene}_${celline}_diff_footprint.csv`
            downloadFile(href, fileName)
        },
    },
    watch: {
       
    },

    data() {
        return {

            currentPage: 1,
            total: 0,
            pageSize: 10,
            datasourceList: [],
            methodList: [],
            activeNames: ['1', '2'],
            globalID: 1,
            timer: '',


            tableData: [],
            filter: {},


            paging: {
                "start": 0, //起始数据点（分页）
                "length": 10
            }


        };
    },
    computed: {
    },
    created() {
        this.load();
        // sessionStorage.setItem('dbID', ' ')
    },

}

</script>
  
<style scoped>
.el-form {
    margin-left: 4vw;
}

.el-form-item__label {
    color: black;
}

.header-cell-class-name {
    border-color: black;
    color: black;
}

.formRow1 {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;

    margin-top: 20px;
    margin-right: 20px;
}

.formRow2 {
    display: grid;
    grid-template-columns: 2fr 3fr 3fr;
    justify-content: space-between;
    justify-self: center;

    margin-right: 20px;
}

.formRow3 {
    display: flex;
    justify-content: center;
}

.el-row {
    margin-bottom: 20px;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.el-collapse-item__content {
    background-color: #eeeeee36;
}
</style>