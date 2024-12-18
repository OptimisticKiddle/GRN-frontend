<template>

  <h2>GRN refine</h2>
  <hr
    style="margin: 0  20px 20px 20px;"
    color='green'
  >
  <div>
    <el-form
      label-width="auto"
      style="margin-left: 20px;"
    >

      <el-form-item label="KO GAM :">
        <el-upload
          class="upload-demo"
          :http-request="({file})=>beforeUpload(file,'KO')"
          accept=".rds"
          :file-list="fileList2"
          :on-change="changeFile2"
        >
          <template #trigger>
            <el-button
              type="primary"
              style="background-color: #027750; border: none;"
              :loading="uploading"
              :disabled="uploading"
            >{{uploading ? 'Uploading...':'select file'  }}</el-button>
          </template>

        </el-upload>
      </el-form-item>

      <div style="display: flex;">
        <el-form-item style="margin-right: 20px;">
          <el-button
            type="success"
            :style="{width:'180px',backgroundColor:'#8cd069'}"
            @click="handleRefine"
            :disabled="isLoading || uploading"
            :loading="isLoading"
          >Refine</el-button>
        </el-form-item>
        <el-form-item style="margin-right: 20px;">
          <a :href="baseUrl + `/api/download/${gse}/${gsm}/GRN.mm`">

            <el-button
              type="success"
              :style="{width:'180px',backgroundColor:'#8cd069'}"
            >Download Base GRN</el-button>
          </a>

        </el-form-item>
        <el-form-item
          style="margin-right: 20px;"
          v-if="isRefined"
        >
          <a :href="baseUrl + `/api/download/${gse}/${gsm}/refined_GRN.npy`">

            <el-button
              type="success"
              :style="{width:'180px',backgroundColor:'#8cd069'}"
            >Download Refined GRN</el-button>
          </a>

        </el-form-item>

      </div>

    </el-form>
  </div>

  <h2>GRN visualization</h2>
  <hr
    style="margin: 0  20px 20px 20px;"
    color='green'
  >
  <div :style="{display:'flex',justifyContent: isRefined ? 'space-between':'center',}">
    <section
      class="col-md-8  panel panel-tertiary "
      data-portlet-item
    >
      <header
        class="panel-heading"
        style="position: relative;"
      >
        <span
          style="font-size: 16px;"
          class="panel-title"
        >Base GRN</span>

        <a
          :href="baseUrl + `/api/download/${gse}/${gsm}/GRN_network.html`"
          download
          style="position: absolute;right: 2vw;"
        ><el-button
            type="warning"
            size="small"
            circle
          ><el-icon>
              <Download />
            </el-icon></el-button></a>
      </header>
      <div class="panel-body twoimg">
        <iframe
          class="iframe-view"
          :src="baseUrl + `/api/static/GSE${gse}/GSM${gsm}/GRN_network.html`"
          frameborder="0"
          style="height: 500px;"
          scrolling="auto"
        ></iframe>
      </div>
    </section>
    <section
      class="col-md-8  panel panel-tertiary "
      data-portlet-item
      v-if="isRefined"
    >
      <header
        class="panel-heading"
        style="position: relative;"
      >
        <span
          style="font-size: 16px;"
          class="panel-title"
        >Refined GRN</span>

        <a
          :href="baseUrl + `/api/download/${gse}/${gsm}/refined_GRN_network.html`"
          download
          style="position: absolute;right: 2vw;"
          v-if="isPlot"
        ><el-button
            type="warning"
            size="small"
            circle
          ><el-icon>
              <Download />
            </el-icon></el-button></a>
      </header>

      <div class="panel-body twoimg">
        <div style="position:relative;">
          <img
            src="../../assets/images/string_network.png"
            alt=""
            style="filter: blur(40px);height: 500px;"
            v-if="!isPlot"
          >
          <iframe
            class="iframe-view"
            :src="baseUrl + `/api/static/GSE${gse}/GSM${gsm}/refine/refined_GRN_network.html`"
            frameborder="0"
            style="height: 500px;"
            v-if="isPlot"
          ></iframe>
          <el-button
            v-if="!isPlot"
            type="success"
            style="width:80px;position:absolute;top:50%;left:50%;transform: translate(-50%, -50%);"
            :loading="ploating"
            @click="handleGenerate"
          >Generate</el-button>

        </div>

      </div>
    </section>
  </div>
  <div
    :style="{display:'flex',justifyContent: 'space-between'}"
    v-if="isRefined"
  >
    <section
      class="col-md-8  panel panel-tertiary "
      data-portlet-item
    >
      <header
        class="panel-heading"
        style="position: relative;"
      >
        <span
          style="font-size: 16px;"
          class="panel-title"
        >(Violin)</span>

        <a
          :href="baseUrl + `/api/download/${gse}/${gsm}/violin_plot.png`"
          download
          style="position: absolute;right: 2vw;"
        ><el-button
            type="warning"
            size="small"
            circle
          ><el-icon>
              <Download />
            </el-icon></el-button></a>
      </header>
      <div class="panel-body twoimg">

        <img
          :src="baseUrl + `/api/static/GSE${gse}/GSM${gsm}/refine/violin_plot.png`"
          alt=""
        >
      </div>
    </section>
    <section
      class="col-md-8  panel panel-tertiary "
      data-portlet-item
    >
      <header
        class="panel-heading"
        style="position: relative;"
      >
        <span
          style="font-size: 16px;"
          class="panel-title"
        >(Feature)</span>

        <a
          :href="baseUrl + `/api/download/${gse}/${gsm}/VariableFeature.png`"
          download
          style="position: absolute;right: 2vw;"
        ><el-button
            type="warning"
            size="small"
            circle
          ><el-icon>
              <Download />
            </el-icon></el-button></a>
      </header>

      <div class="panel-body twoimg">
        <div style="position:relative">
          <img
            :src="baseUrl + `/api/static/GSE${gse}/GSM${gsm}/refine/VariableFeature.png`"
            alt=""
          >

        </div>

      </div>
    </section>
  </div>
  <div
    :style="{display:'flex',justifyContent: 'space-between'}"
    v-if="isRefined"
  >
    <section
      class="col-md-8  panel panel-tertiary "
      data-portlet-item
    >
      <header
        class="panel-heading"
        style="position: relative;"
      >
        <span
          style="font-size: 16px;"
          class="panel-title"
        >(umap)</span>

        <a
          :href="baseUrl + `/api/download/${gse}/${gsm}/umap.png`"
          download
          style="position: absolute;right: 2vw;"
        ><el-button
            type="warning"
            size="small"
            circle
          ><el-icon>
              <Download />
            </el-icon></el-button></a>
      </header>
      <div class="panel-body twoimg">

        <img
          :src="baseUrl + `/api/static/GSE${gse}/GSM${gsm}/refine/umap.png`"
          alt=""
        >
      </div>
    </section>
    <section
      class="col-md-8  panel panel-tertiary "
      data-portlet-item
    >
      <header
        class="panel-heading"
        style="position: relative;"
      >
        <span
          style="font-size: 16px;"
          class="panel-title"
        >Performance Evaluation</span>

        <a
          :href="baseUrl + `/api/download/${gse}/${gsm}/PerformanceEvaluation.png`"
          download
          style="position: absolute;right: 2vw;"
        ><el-button
            type="warning"
            size="small"
            circle
          ><el-icon>
              <Download />
            </el-icon></el-button></a>
      </header>
      <div class="panel-body twoimg">

        <img
          :src="baseUrl + `/api/static/GSE${gse}/GSM${gsm}/refine/PerformanceEvaluation.png`"
          alt=""
        >
      </div>
    </section>

  </div>
  <div
    :style="{display:'flex',justifyContent: 'space-between'}"
    v-if="isRefined"
  >
    <section
      class="col-md-8  panel panel-tertiary "
      data-portlet-item
      v-if="isRefined"
    >
      <header
        class="panel-heading"
        style="position: relative;"
      >
        <span
          style="font-size: 16px;"
          class="panel-title"
        >Losses</span>

        <a
          :href="baseUrl + `/api/download/${gse}/${gsm}/Losses.png`"
          download
          style="position: absolute;right: 2vw;"
        ><el-button
            type="warning"
            size="small"
            circle
          ><el-icon>
              <Download />
            </el-icon></el-button></a>
      </header>

      <div class="panel-body twoimg">
        <div style="position:relative">
          <img
            :src="baseUrl + `/api/static/GSE${gse}/GSM${gsm}/refine/Losses.png`"
            alt=""
          >

        </div>

      </div>
    </section>
    <section
      class="col-md-8  panel panel-tertiary "
      data-portlet-item
      v-if="isRefined"
    >
      <header
        class="panel-heading"
        style="position: relative;"
      >
        <span
          style="font-size: 16px;"
          class="panel-title"
        >Distances</span>

        <a
          :href="baseUrl + `/api/download/${gse}/${gsm}/Distances.png`"
          download
          style="position: absolute;right: 2vw;"
        ><el-button
            type="warning"
            size="small"
            circle
          ><el-icon>
              <Download />
            </el-icon></el-button></a>
      </header>

      <div class="panel-body twoimg">
        <div style="position:relative">
          <img
            :src="baseUrl + `/api/static/GSE${gse}/GSM${gsm}/refine/Distances.png`"
            alt=""
          >
        </div>
      </div>
    </section>

  </div>

  <div style="margin-bottom: 2%; overflow: hidden;"></div>

</template>
  
  
  
  <script>

import request from "@/utils/request";


export default {
  name: "Gene_network",
  components: {

  },
  props: {
    gse: String,
    gsm: String
  },
  data () {
    return {
      size: 'large',
      activeNames: ['1'],
      baseUrl: process.env.VUE_APP_BASE_URL,
      dataSet: {},
      fileList1: [],
      fileList2: [],
      isRefined: false,
      isLoading: false,
      isPlot: false,
      ploating: false,
      uploading: false,
    }

  },
  methods: {
    handleGenerate () {
      this.ploating = true;
      this.$store.commit('setLoading', true)
      request.get(`/plot_grn/${this.gse}/${this.gsm}`).then(res => {
        this.isPlot = true;
        this.ploating = false;
        this.$store.commit('setLoading', false)

        this.$message({
          message: res.message,
          type: "success",
        })
      }).catch(err => {
        this.ploating = false;
        this.$store.commit('setLoading', false)

        this.$message({
          message: 'Generate failed',
          type: "error",
        })
      })
    },
    changeFile1 (file, fileList) {
      if (fileList.length > 1) {
        fileList.splice(0, 1);
      }
      this.fileList1 = fileList;
    },
    changeFile2 (file, fileList) {
      if (fileList.length > 1) {
        fileList.splice(0, 1);
      }
      this.fileList2 = fileList;
    },
    uploadFile (formData, mark) {
      console.log('formdata', formData);
      this.uploading = true;
      request({
        url: `/upload/${this.gse}/${this.gsm}/${mark}`,
        method: 'post',
        data: formData,
        //关键，这里是将其转换为二进制文件，否则只会得到一个uid的对象
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(res => {
        this.uploading = false;
        this.$message({
          message: res.message,
          type: "success",
        });
      }).catch(err => {
        this.uploading = false;
        this.$message({
          message: 'error',
          type: "error",
        });
      })
    },
    beforeUpload (file, mark) {
      console.log(file)
      const formData = new FormData();
      formData.append("file", file);
      this.uploading = true;
      this.uploadFile(formData, mark);

    },
    handleRefine () {
      if (!this.fileList2.length) {
        this.$message({
          message: 'Please upload files',
          type: "error",
        });
        return;
      }
      this.isLoading = true;
      this.$store.commit('setLoading', true);
      this.isRefined = false;
      request.get(`/refine/${this.gse}/${this.gsm}`).then(res => {
        this.isRefined = true;
        this.isLoading = false;
        this.$store.commit('setLoading', false);
        this.$message({
          message: res.message,
          type: "success",
        });

      }).catch(err => {
        this.$store.commit('setLoading', false);
        this.isLoading = false;
        this.$message({
          message: 'Refine failed',
          type: "error",
        });
      })
    },






  },
  created () {




  },
  beforeDestroy () {
    // bus.off('ID')
  },


}


  </script>
  
  <style scoped>
.center-panel {
  display: flex;
  align-items: center;
  justify-content: center;
}
.el-collapse-item__wrap,
.col-md-6 {
  padding: 2vw;
}

.showimg {
  width: 40vw;
}
h2 {
  margin-left: 20px;
  color: #0e876d;
  font-weight: 700;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
img {
  width: 100%;

  object-fit: cover;
}
.iframe-view {
}
</style>