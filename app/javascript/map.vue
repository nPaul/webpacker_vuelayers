<template>
	<div id="tpmap">
		<main id="app">
			<vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true">
				<vl-view :zoom="2" :center="[0, 0]" :rotation="0"></vl-view>

				<vl-geoloc>
					<template slot-scope="ctx">
						<vl-feature v-if="ctx.position" id="geoloc-feature">
							<vl-geom-point :coordinates="ctx.position"></vl-geom-point>
						</vl-feature>
					</template>
				</vl-geoloc>

				<vl-layer-tile id="osm">
					<vl-source-osm></vl-source-osm>
				</vl-layer-tile>
			</vl-map>
		</main>
	</div>
</template>
<script>
export default {
	data() {
		return {
		}
	}
}
</script>
<style lang="scss" scoped>
</style>
