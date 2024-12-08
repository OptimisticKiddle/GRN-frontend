<template>
  <div style="width: 95%;margin: 2% auto; overflow: hidden;">
    <!-- 筛选面板 -->

    <div
      class="col-md-12"
      data-plugin-portlet
      style="margin-top: 20px;"
    >
      <el-collapse v-model="activeNames">
        <el-collapse-item name="2">
          <!-- 展示面板title -->
          <template #title>
            <el-icon>
              <Search />
            </el-icon>&nbsp; Visualization
          </template>

          <div>
            <detail
              :globalID="1"
              :globalDataset="{pb_gene: '',cell_line: ''}"
              :key="''"
              :choose="false"
            ></detail>
          </div>

        </el-collapse-item>

      </el-collapse>
    </div>
    <div
      class="col-md-12"
      data-plugin-portlet
    >
      <el-collapse v-model="activeNames">
        <el-collapse-item name="1">
          <!-- 展示面板title -->
          <template #title>
            <el-icon>
              <Search />
            </el-icon>&nbsp; Refine GRN
          </template>
          <div style="margin-top:20px">
            <el-form label-width="auto">

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
                    @click="()=>trigger = true"
                    :style="{width:'180px',backgroundColor:trigger ? '#027750' : '#8cd069'}"
                  >{{trigger ? 'Download Refine GRN' : 'Upload'}}</el-button>
                </el-form-item>

                <el-form- v-if="trigger">
                  <el-button
                    type="success"
                    @click="()=>trigger = false"
                    :style="{width:'180px'}"
                  >Re-upload</el-button>
                </el-form->
              </div>

            </el-form>
          </div>

        </el-collapse-item>

      </el-collapse>
    </div>
  </div>
</template>

<script setup>
import { onActivated, onMounted, ref } from "vue";
import detail from "@/views/detail.vue";

const activeNames = ref(['1', '2']);
const trigger = ref(false);

onActivated(() => {
  console.log(111)
  trigger.value = false;
})
</script>

<style>
</style>