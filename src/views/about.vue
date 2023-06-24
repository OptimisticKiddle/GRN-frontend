<template>
  <!-- 主体 -->
  <div style="width: 95%;margin: 2% auto;">
    <!-- 展示面板 -->
    <div class="col-md-12" data-plugin-portlet>
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <!-- 展示面板title -->
          <template #title>
            <el-icon>
              <ChatDotRound />
            </el-icon>&nbsp; Contact us
          </template>
          <el-card class="box-card">
            <el-descriptions
              title="Feel free to contac us if you have any questions or suggestions about ATACdb database.">
            </el-descriptions>
            <ul class="email">
              <li>
                <p><el-icon style="vertical-align: -15%;">
                    <Avatar />
                  </el-icon><b> Mr.Wei Shao</b></p>
                <p><el-icon style="vertical-align: -15%;">
                    <Message />

                  </el-icon><b> Email：</b>upcsw2001@163.com</p>
              </li>
              <li>
                <p><el-icon style="vertical-align: -15%;">
                    <Avatar />
                  </el-icon><b> Ms.Shuang Zhang</b></p>
                <p><el-icon style="vertical-align: -15%;">
                    <Message />
                  </el-icon><b> Email：</b>2120210562@mail.nankai.edu.cn</p>
              </li>
              <li>
                <p><el-icon style="vertical-align: -15%;">
                    <Avatar />
                  </el-icon><b> Dr.Wanwen Zeng</b></p>
                <p><el-icon style="vertical-align: -15%;">
                    <Message />
                  </el-icon><b> Email：</b>wwzeng@nankai.edu.cn</p>
              </li>
            </ul>
          </el-card>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="col-md-12" data-plugin-portlet style="margin-top: 2%;">
      <el-collapse v-model="activeNames">
        <el-collapse-item name="2">
          <!-- 展示面板title -->
          <template #title>
            <el-icon>
              <ChatLineSquare />
            </el-icon>&nbsp;News and updates
          </template>
          <el-card class="box-card">
            <div class="text item">2023-05 Provided a demo of ATAC-seq dataset analysis.</div>
            <div class="text item">2023-04 Version 1.0 of the database is launched.</div>
          </el-card>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<style scoped>
.el-descriptions {
  padding-left: 2%;
}

.email {
  margin: 2% 3%;

}

li {
  list-style-type: none;
}

.item {
  padding: 18px 0;
}
</style>

<script>

export default {
  name: "about",
  data() {
    return {
      activeNames: ['1', '2'],
    }
  }
}


</script>