<template>
	<div class="welcome">
		<h1 class="subheading grey--text">The tip giver</h1>
		<h2>Give the workers their fair share</h2>
		
		<v-container class="my-5">
			<v-layout row wrap>
				<v-flex xs12 sm6 md4 v-for="msg in frontCards" :key="msg.title">
					<v-card	class="ma-2" min-height="200px">
						<v-card-title>{{ msg.title }}</v-card-title>
						<v-card-text>{{ msg.content }}</v-card-text>
						<v-card-actions>
							<v-btn text>{{ msg.btn }}</v-btn>
						</v-card-actions>
					</v-card>
				</v-flex>
			</v-layout>

			<v-layout row wrap class="my-4">
				<v-flex xs12>
					<h2 class="text-center mt-5">People have said about us</h2>
				</v-flex>
				<v-flex xs12 sm10 md8 lg6 class="mx-auto">
					<v-carousel	cycle height="100%" :show-arrows="false" class="mt-4">
						<v-carousel-item v-for="(slide, i) in goodWords" :key="i">
							<v-card	class="mx-auto" color="#26c6da" dark max-width="700px">
								<v-card-text class="headline font-weight-bold">
									"Turns out semicolon-less style is easier and safer in TS because most gotcha edge cases are type invalid as well."
								</v-card-text>

								<v-card-actions>
									<v-list-item>
										<v-list-item-content>
											<v-list-item-title>Evan You</v-list-item-title>
										</v-list-item-content>
										<!-- <v-layout align-center justify-end> -->
										<!-- </v-layout> -->
									</v-list-item>
								</v-card-actions>
							</v-card>
						</v-carousel-item>
					</v-carousel>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				frontCards: [
				{title: 'Speed', content: 'We are the fastest tip spilling app on the planet.', btn: 'Try it out'},
				{title: 'Security', content: 'No data leaks for any kind of reason. Not in our world.', btn: 'get tips'},
				{title: 'Simplicity', content: 'They easiest and most intuitive UI.', btn: 'How it works'}
				],
				goodWords: [
				{name: 'Tim', quote: 'Simply the best. Really awesome!!!!'},
				{name: 'Dan', quote: 'The customer service is second to none'},
				{name: 'Melisa', quote: 'I have tried many many other app in the past. I think i\'m not going to search again'},
				{name: 'Ardian', quote: 'The app of apps'},
				]
			}
		}
	}
</script>