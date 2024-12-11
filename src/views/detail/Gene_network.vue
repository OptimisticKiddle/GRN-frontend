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
      <el-form-item label="WT gene activity by cluster :">
        <el-upload
          ref="uploadRef"
          class="upload-demo"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :auto-upload="false"
        >
          <template #trigger>
            <el-button
              type="primary"
              style="background-color: #027750; border: none;"
            >select file</el-button>
          </template>

        </el-upload>
      </el-form-item>
      <el-form-item label="KO gene activity by cluster :">
        <el-upload
          ref="uploadRef"
          class="upload-demo"
          action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
          :auto-upload="false"
        >
          <template #trigger>
            <el-button
              type="primary"
              style="background-color: #027750; border: none;"
            >select file</el-button>
          </template>

          <!-- <template #tip>
	  <div class="el-upload__tip">
		jpg/png files with a size less than 500kb
	  </div>
	</template> -->
        </el-upload>
      </el-form-item>

      <div style="display: flex;">
        <el-form-item style="margin-right: 20px;">
          <el-button
            type="success"
            :style="{width:'180px',backgroundColor:trigger ? '#027750' : '#8cd069'}"
          >Refine</el-button>
        </el-form-item>
        <el-form-item style="margin-right: 20px;">
          <a :href="baseUrl + `/api/download/${gse}/${gsm}/GRN.hg`">

            <el-button
              type="success"
              :style="{width:'180px',backgroundColor:'#027750' }"
            >Download Base GRN</el-button>
          </a>

        </el-form-item>

      </div>

    </el-form>
  </div>
  <!-- 2--中间的一张图 -->
  <!-- 降维 -->
  <h2>GRN visualization</h2>
  <hr
    style="margin: 0  20px 20px 20px;"
    color='green'
  >
  <div style="display:flex;justify-content: space-between;">
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

        <!-- <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/differential_statistics.png`" -->
        <a
          :href="baseUrl + `/api/download/${gse}/${gsm}/string_network.png`"
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

        <!-- <img :src="`http://43.143.155.140/atac_db/${this.dbID}/plots/differential_statistics.png`" alt=""> -->
        <img
          :src="baseUrl + `/api/static/GSE${gse}/GSM${gsm}/string_network.png`"
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
        >Refined GRN</span>

        <!-- <a :href="`http://43.143.155.140/atac_db/${this.dbID}/plots/differential_statistics.png`" -->
        <a
          :href="baseUrl + `/api/download/${gse}/${gsm}/string_network.png`"
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
            :src="baseUrl + `/api/static/GSE${gse}/GSM${gsm}/string_network.png`"
            alt=""
            style="filter: blur(35px);"
          >

        </div>

      </div>
    </section>
  </div>

  <div style="margin-bottom: 2%; overflow: hidden;"></div>

</template>
  
  
  
  <script>

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


    }

  },
  methods: {



  },
  created () {
    // console.log(this.dbID);

    // let router = useRouter()
    // 监听当前路由变化
    // watch(
    //   () => router.currentRoute.value,
    //   () => {
    //     // this.dbID = router.currentRoute.value.params.id;
    //     this.load();
    //   }
    // );
    // this.dbID = router.currentRoute.value.params.id;
    // this.load();



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
</style>