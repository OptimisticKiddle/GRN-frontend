<template>
	<div class="common-layout">
		<el-container>

			<div class="clear"></div>
			<div style="margin-left: 5%; margin-right: 5%;">
				<div class="col-md-12">
					<header id="gtco-header" class="gtco-cover gtco-cover-xs gtco-inner" role="banner">

						<div class="gtco-container" style="display: flex;">

							<div class="animate-box" style="margin-top: 3rem;">
								<h2 style='padding-left:50px; font-weight:bold;'>Welcome to ATACdb</h2>
								<h4 style='padding-left:50px'>A database exploring the effects of genetic inheritance </h4>
								<h4 style='padding-left:50px'>perturbations on human chromatin accessibility</h4>
							</div>
							<div class="header-img animate-box">
								<img src="@/assets/images/logo-v1.png" alt="" width="250" style='margin-top:30px'>
							</div>

						</div>

					</header>
				</div>
			</div>

			<!-- 三个面板 -->
			<div style="margin: 2% 5%; ">
				<!-- 第一个面板 -->
				<div class="col-md-12" data-plugin-portlet id="portlet-1">
					<el-collapse v-model="activeNames">
						<el-collapse-item name="1">
							<!-- 第一个面板title -->
							<template #title>
								<el-icon>
									<View />
								</el-icon>&nbspOverview
							</template>

							<div class="panel-body">
								<!-- 第一个面板 body 文字 -->
								<p style="margin-top: 0px;">
									ATAC-seq, a high-throughput sequencing approach targeting open chromatin, provides an
									effective way to characterize the epigenetic landscape and identify potential
									cis-regulatory modules. Compared with other techniques, ATAC-seq has the advantages of
									small sample size, short sample preparation time, and high reliability. With its
									unparalleled advantages, ATAC-seq has rapidly become an effective method for studying
									open regulatory regions.
								</p>
								<p>
									To help investigate the effects of genetic perturbations on human chromatin
									accessibility and related transcription factor regulatory networks, we have established
									ATACdb, a comprehensive ATAC-seq database. Our goal is to provide researchers with a
									publicly available resource on human chromatin accessibility and other data in the
									context of different genetic genetic perturbations, helping to investigate the potential
									effects of genetic perturbations on tissues or cells with different functions.
								</p>
								ATACdb has the following main functions:

								<ol>
									<li>To explore differential chromatin accessibility under different genetic
										perturbations
									</li>
									<li>GO/KEGG enrichment analysis of differential chromatin accessibility</li>
									<li>Motif enrichment analysis of differential chromatin accessibility</li>
									<li>Footprint analysis of differential chromatin accessibility and transcription factor
										regulatory network diagram</li>
								</ol>

								<!-- HiChIPdb has the following main features:
								
									<ol>
										<li>Hierarchical categorization of whole genome HiChIP interactions across different
											organs, tissues, and cell types.</li>
										<li>Unified pipeline using GRCh37(hg19) as reference genome to obtain comprehensive
											resolution (<a target='_blank'
												href="browse.php?method=fithichip_1k&chip=H3K27ac">1kb</a>, <a
												target='_blank' href="browse.php?method=fithichip_5k&chip=H3K27ac">5kb</a>,
											<a target='_blank' href="browse.php?method=fithichip_10k&chip=H3K27ac">10kb</a>
											,<a target='_blank' href="browse.php?method=fithichip_50k&chip=H3K27ac">50kb</a>
											and <a target='_blank' href="browse.php?method=hichipper&chip=H3K27ac">variable
												length</a><sup><span data-html="true" data-toggle="tooltip"
													data-placement="right"
													title="<div align='left' style='font-size:110%'>The resolutions of 1kb, 5kb, 10kb, and 50kb are obtained by FitHiChIP, and the variable length resolution is obtained by hichipper.</div>"><i
														class="ti-info-alt" style="font-size: 80%"></i></span></sup>) of
											HiChIP
											interactions with regulatory genes, potential GWAS SNP annotations.
										</li>
										<li><a target='_blank' href="detail.php?ID='20056696'&method='fithichip_5k'">
												Extensive
												annotation and IGV visualization</a> of regulatory genes and GWAS catalog
											SNPs
											for each HiChIP interaction.
										</li>

										<li><a target='_blank' href="search.php?demo"> Specific gene/region/SNP
												searching</a>.
										</li>
									</ol>
								 -->
								<!-- 第一个面板 body 轮播图 -->

								<div style="width: 75vw; margin: 3vh auto;">
									<el-carousel height="50vw">
										<el-carousel-item v-for="item in pics" :key="item.url">
											<img :src="item.url" style="width:100%;height: 100%;" />
										</el-carousel-item>
									</el-carousel>
								</div>

							</div>
						</el-collapse-item>
					</el-collapse>
				</div>
				<!-- 后两个面板 -->
				<!-- papers -->
				<!-- 第二个面板 -->



				<el-collapse class="col-md-6" id="portlet-2" v-model="activeNames">
					<el-collapse-item name="2">

						<template #title>
							<el-icon>
								<Reading />
							</el-icon>&nbsp;Reference articles
						</template>
						<section class="panel-body eq-height">



							<blockquote style="font-size: 16px;">
								<a target='_blank' href="https://doi.org/10.1093/nar/gkac1066">GPSAdb: a comprehensive web
									resource for interactive exploration of genetic perturbation RNA-seq datasets.</a>
								<small>Guo Shipeng,Xu Zhougeng,Dong Xiangjun, et al.<cite>Nucleic acids research.
									</cite>2022;xxxxxxx606(7912):188-96.</small>
							</blockquote>

							<blockquote style="font-size: 16px;">
								<a target='_blank' href="https://doi.org/10.1093/nar/gkac859">HiChIPdb: a comprehensive
									database of HiChIP regulatory interactions.</a>
								<small>Zeng Wanwen,Liu Qiao,Yin Qijin, et al. <cite>Nucleic acids research.
									</cite>2022;xxxxxx22(8):511-28.</small>
							</blockquote>

							<blockquote style="font-size: 16px;">
								<a target='_blank' href="https://doi.org/10.1093/nar/gkaa943">ATACdb: a comprehensive human
									chromatin accessibility database</a>
								<small>Fan Wang, Xuefeng Bai, Yuezhu Wang, et al. <cite>Nucleic acids research.
									</cite>2020;xxxxx597(7878):726-31.</small>
							</blockquote>
						</section>
					</el-collapse-item>
				</el-collapse>



				<!-- news -->
				<!-- 第三个面板 -->

				<div class="col-md-6" id="portlet-3">
					<el-collapse v-model="activeNames">
						<el-collapse-item name="3">

							<template #title>
								<el-icon>
									<ChatLineSquare />
								</el-icon>&nbsp;News and updates
							</template>

							<section class="panel-body eq-height">

								<div>

									<ul class="timeline">
										<li>
											<div class="timeline-badge info"><i class="glyphicon glyphicon-check"></i>
											</div>
											<div class="timeline-panel">
												<div class="timeline-heading">
													<h4 style="font-size: 15px;" class="timeline-title">Add the gene and
														GWAS
														catalog annotation at different scales.</h4>
													<small class="text-light"><el-icon>
															<Clock />
														</el-icon>
														19 June
														2022</small>
												</div>
											</div>
										</li>

										<li class="timeline-inverted">
											<div class="timeline-badge"><i class="glyphicon glyphicon-floppy-disk"></i>
											</div>
											<div class="timeline-panel">
												<div class="timeline-heading">
													<h4 style="font-size: 15px;" class="timeline-title">Provided a
														<!-- <router-link to="/tutorial">demo</router-link>  -->
														<a href="#" @click="toTutorial">demo</a>
														of ATAC-seq dataset
														analysis.
													</h4>
													<small class="text-light"><el-icon>
															<Clock />
														</el-icon>
														May
														2023</small>
												</div>
											</div>
										</li>

										<li>
											<div class="timeline-badge success"><i class="glyphicon glyphicon-upload"></i>
											</div>
											<div class="timeline-panel">
												<div class="timeline-heading">
													<h4 style="font-size: 15px;" class="timeline-title">Version 1.0 of
														the
														database is launched.</h4>
													<small class="text-light"><el-icon>
															<Clock />
														</el-icon>
														April
														2023</small>
												</div>
											</div>
										</li>

									</ul>

								</div>
							</section>
						</el-collapse-item>
					</el-collapse>

				</div>
			</div>
			<router-view />
			<el-footer>

				<el-backtop :bottom="20" :right="20">
					<div style="
        height: 100%;
        width: 100%;
        background-color: var(--el-bg-color-overlay);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 45px;
        color: #15a585;
      ">
						<el-icon>
							<Top />
						</el-icon>
					</div>
				</el-backtop>
			</el-footer>
		</el-container>
	</div>
</template>


<script>
// @ is an alias to /src


export default {
	name: 'home',
	components: {

	},
	data() {
		return {
			activeNames: ['1', '2', '3'],
			pics: [
				{ url: require("../assets/images/new/browse1.png") },
				{ url: require("../assets/images/new/browse2.png") },
				{ url: require("../assets/images/new/browse3.png") },
				{ url: require("../assets/images/new/tutorial.png") },
			]

		};

	},
	methods: {
		toTutorial() {
			this.$router.replace({ name: "tutorial" })

		}

	}

}
</script>
<style scoped>
.panel-body {
	border: none;
}

.el-footer {
	--el-footer-padding: 0;
}
</style>