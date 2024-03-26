<template>
	<div class="common-layout">
		<el-container>

			<div class="clear"></div>
			<div style="margin-left: 5%; margin-right: 5%;">
				<div class="col-md-12">
					<header id="gtco-header" class="gtco-cover gtco-cover-xs gtco-inner" role="banner">

						<div class="gtco-container" style="display: flex;">

							<div class="animate-box welcome-text" style="margin-top: 3rem;">
								<h2 style='padding-left:50px; font-weight:bold;'>Welcome to GP-scATACdb</h2>
								<h4 style='padding-left:50px'>A database exploring the effects of genetic inheritance </h4>
								<h4 style='padding-left:50px'>perturbations on human chromatin accessibility</h4>
							</div>
							<div class="header-img animate-box">
								<img src="new_logo.png" alt="" width="500" style='margin-top:55px'>
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
								</el-icon>&nbsp Overview
							</template>

							<div class="panel-body overview-introduction">
								<!-- 第一个面板 body 文字 -->
								<p style="margin-top: 0px;">
									scATAC-seq (Single-cell Assay for Transposase Accessible Chromatin with high-throughput sequencing) is an advanced single-cell epigenetics technique designed to identify and map open chromatin regions within individual cells. It combines the strengths of ATAC-seq (Assay for Transposase Accessible Chromatin) with single-cell sequencing capabilities to unravel fine-grained changes in chromatin structure across individual cells, thereby investigating cellular heterogeneity and the complexity of transcriptional regulation.
								</p>
								<p>
									To help investigate the effects of genetic perturbations on human chromatin
									accessibility and related gene regulatory networks, we have established
									GP-scATACdb, a comprehensive scATAC-seq database. Our goal is to provide researchers with a
									publicly available resource on human single-cell chromatin accessibility and other data in the
									context of genetic genetic perturbations, helping to investigate the potential
									effects of genetic perturbations on tissues or cells with different functions.
								</p>
								GP-scATACdb has the following main functions:

								<ol>
									<li>To explore differential chromatin accessibility  in single cells under different genetic perturbations
									</li>
									<li>QC, downscaling and clustering of scATAC-seq downstream data</li>
									<li>Calculate the gene activity matrices before and after the perturbation</li>
									<li>Provide a code tutorial for inferring GRNs from gene activity matrices</li>
								</ol>

								
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
								<a target='_blank' href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6329648/">Coupled single-cell CRISPR screening and epigenomic profiling reveals causal gene regulatory networks.</a>
								<small>Rubin A J, Parker K R, Satpathy A T, et al.<cite>Cell,
									</cite>2019, 176(1-2): 361-376. e17.</small>
							</blockquote>

							<blockquote style="font-size: 16px;">
								<a target='_blank' href="https://www.nature.com/articles/s41467-021-23213-w">High-throughput single-cell chromatin accessibility CRISPR screens enable unbiased identification of regulatory networks in cancer.</a>
								<small>Pierce S E, Granja J M, Greenleaf W J. <cite>Nature Communications,
									</cite>2021, 12(1): 2969.</small>
							</blockquote>

							<blockquote style="font-size: 16px;">
								<a target='_blank' href="https://www.nature.com/articles/s43586-021-00093-4">High-content CRISPR screening.</a>
								<small>Bock C, Datlinger P, Chardon F, et al.  <cite>Nature Reviews Methods Primers,
									</cite>2022, 2(1): 8.</small>
							</blockquote>
							<blockquote style="font-size: 16px;">
								<a target='_blank' href="https://www.nature.com/articles/s41587-021-00902-x">Profiling the genetic determinants of chromatin accessibility with scalable single-cell CRISPR screens.</a>
								<small> Liscovitch-Brauer N, Montalbano A, Deng J, et al.<cite>Nature biotechnology,
									</cite>2021, 39(10): 1270-1277.</small>
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
													<h4 style="font-size: 15px;" class="timeline-title">Provided a
														<router-link to="/tutorial">demo</router-link> 
														of scATAC-seq dataset
														analysis.</h4>
													<small class="text-light"><el-icon>
															<Clock />
														</el-icon>
														February
														2024</small>
												</div>
											</div>
										</li>

										<li class="timeline-inverted">
											<div class="timeline-badge"><i class="glyphicon glyphicon-floppy-disk"></i>
											</div>
											<div class="timeline-panel">
												<div class="timeline-heading">
													<h4 style="font-size: 15px;" class="timeline-title">Add the Download module page.
													</h4>
													<small class="text-light"><el-icon>
															<Clock />
														</el-icon>
														December
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
														October
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
				{ url: require("../assets/images/scATAC-db/home-1.jpg") },
				{ url: require("../assets/images/scATAC-db/home-2.jpg") },
				{ url: require("../assets/images/scATAC-db/home-3.jpg") },
				{ url: require("../assets/images/scATAC-db/home-4.jpg") },
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

.welcome-text h4 {
	line-height: 200%;
}
.overview-introduction p {
	line-height: 165%;
}
.overview-introduction li {
	line-height: 200%;
	margin-left: 2vw;
}
</style>