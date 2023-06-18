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

                            <el-form-item label="ID :">
                                <el-input v-model="filter.id" clearable
                                    style="width: 86px;"></el-input>
                            </el-form-item>
                            <el-form-item label="Pb_gene :">
                                <el-input v-model="filter.pb_gene" placeholder="e.g. ATP5F1C" clearable
                                    style="width: 100%;"></el-input>
                            </el-form-item>
                            <el-form-item label="Pb_ensembl :">
                                <el-input v-model="filter.pb_ensembl" placeholder="e.g. ENSG00000165629" clearable
                                    style="width: 150px;"></el-input>
                            </el-form-item>

                            <el-form-item label="n_sample range :" style="margin-left: 2vw;">
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
                                    style="width: 300px;">
                                    <el-option v-for='item in methodList' :key='item' :label="item" :value="item">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item label="Datasource :">
                                <el-select v-model="filter.datasource" placeholder="Please select datasource"
                                    style="width: 80%;">
                                    <el-option v-for='item in datasourceList' :key='item' :label="item" :value="item">
                                    </el-option>
                                </el-select>
                            </el-form-item>
                        </div>
                        <div class="formRow3">
                            <el-form-item style="margin-left: -120px;">
                                <el-button type="success" @click="onSubmit" style="width: 100px;font-weight: 700;">Submit</el-button>
                                <el-button @click="onReset" style="margin-left: 100px;width: 100px;font-weight: 700;">Reset</el-button>
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
                        <i class="ti-layers"></i>&nbsp; Overall Datasets <sup><span data-html="true" data-toggle="tooltip"
                                data-placement="right" title="The meaning of columns is explained in the Help page."><i
                                    class="ti-info-alt" style="font-size: 70%"> </i></span></sup>
                    </template>
                    <!-- 表格展示 -->
                    <el-table :data="tableData" border stripe table-layout="auto" highlight-current-row ref="multipleTable"
                        @row-click="rowClick" header-cell-class-name="header-cell-class-name"
                        style="color: black;margin-top: 20px;">
                        <!-- prop是表头属性名 label是展示的列名 宽度不写就是自适应-->

                        <el-table-column prop="id" label="ID" align="center" />
                        <el-table-column prop="pb_gene" label="pb_Gene" align="center" />
                        <el-table-column prop="pb_ensembl" label="pb_Ensembl" align="center" />
                        <el-table-column prop="n_sample" label="Sample Num" align="center" />
                        <el-table-column prop="celline" label="Cell Line" align="center" />
                        <el-table-column prop="method" label="Method" align="center" />
                        <el-table-column prop="conditions" label="Conditions" align="center" />
                        <el-table-column prop="accession" label="Accession" align="center">
                            <template v-slot="scope">
                                <div v-html="scope.row.accession"></div>
                            </template>
                        </el-table-column>
                        <el-table-column prop="datasource" label="DataSource" align="center" />
                    </el-table>
                    <div class="table-foot" style="margin: 3vh auto;">
                        <!-- 下载 -->
                        <el-button type="primary" plain @click="onDownload"><el-icon>
                                <Download />
                            </el-icon>CSV</el-button>
                        <!-- 分页 -->
                        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                            :current-page="currentPage" :page-sizes="[5, 10, 20]" :page-size="pageSize"
                            layout="total, sizes, prev, pager, next, jumper" :total="total">
                        </el-pagination>
                    </div>

                </el-collapse-item>
            </el-collapse>
        </div>
        <!-- detail组件 -->
        <div class="col-md-12" data-plugin-portlet style="margin-top: 2%;">
            <detail :globalID="globalID" :globalDataset="globalDataset" :key="timer"></detail>
        </div>
    </div>
    <el-backtop :bottom="20" :right="20">
    <div
      style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 45px;
        color: #15a585;
        "
    >
	<el-icon><Top /></el-icon>
    </div>
  </el-backtop>
</template>
  

<script >

import request from "@/utils/request";
import { computed } from 'vue';
import bus from 'vue3-eventbus'
import detail from "@/views/detail.vue";

export default {
    name: 'search',
    components: {
        detail

    },


    methods: {
        handleClick() {

        },
        load() {

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
        onDownload() {
            let link = document.createElement('a');
            link.style.display = 'none';
            link.href = "http://43.143.155.140/download_overall_data";
            document.body.appendChild(link);
            link.click();
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
        /*  跳转到detail页面的函数
        goDetail(row) {
             const id = row.id;
             // setTimeout(() => {
             //     bus.emit('ID', id)
 
             // }, 100)
             sessionStorage.setItem('dbID', JSON.stringify(id))
             // this.$router.push(`detail/${id}`)
             this.$router.replace({ name: "detail" })
 
 
         }, */
        //  选中表格某一行,对应id存储到globalID的函数
        rowClick(row, column) {
            this.globalID = row.id;
            this.globalDataset.pb_gene = row.pb_gene
            this.globalDataset.cell_line = row.celline
            this.timer = new Date().getTime()  //父组件中每次点击按钮重新加载子组件,与上面的:key="timer"对应
        }
    },
    watch: {
    tableData: function() {
      this.$nextTick(function() {
        this.$refs.multipleTable.setCurrentRow(this.tableData[0])  // 默认选中table的第一行，高亮显示
        this.globalID = this.tableData[0].id
        this.globalDataset.pb_gene = this.tableData[0].pb_gene
        this.globalDataset.cell_line = this.tableData[0].celline
        this.timer = new Date().getTime()              // 下面的total组件跟上面默认选中的第一行数据一致


      })
    }
  },

    data() {
        return {
            currentPage: 1,
            total: 0,
            pageSize: 10,

            datasourceList: [],
            methodList: [],
            activeNames: ['1', '2'],
            timer: '',

            // 页面传输参数
            globalID: 1,
            globalDataset:{
                pb_gene: '',
                cell_line: ''
            },

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
    margin-left: -4vw;
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
    grid-template-columns: 1fr 2fr 2fr 3fr;
    justify-content: space-between;

    margin-top: 20px;
    /* margin-right: 20px; */
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