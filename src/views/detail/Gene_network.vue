<template>

  <!-- 2--中间的一张图 -->
  <!-- 降维 -->
  <h2>Gene regulatory network</h2>
  <hr
    style="margin: 0  20px 20px 20px;"
    color='green'
  >
  <div class="col-md-12 center-panel">
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
          :href="`http://127.0.0.1:8000/api/download/${gse}/${gsm}/string_network.png`"
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
          :src="`http://127.0.0.1:8000/static/GSE${gse}/GSM${gsm}/string_network.png`"
          alt=""
        >
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