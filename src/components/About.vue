<template>
	<div class="about">
		<h1 class="subheading grey--text">About</h1>

		<v-container class="my-5">
			<v-layout row>
				<v-flex xs12 md6>
					<h2>How is works</h2>
					<p>In an ideal world we are doing 8 hour shifts. In the real world we rarely do so.
					The tip giver is a little tool that helps anyone who is being tiped, find their fair share.</p>
					<p>So how it works? Since the 8 hour shift is the norm, we will give it the number 1. Anything more or less will have a certain value by dividing the number of hours with 8 (which represents 1 shift). </p>
					<p>For example:</p>
					<p>If you worked a 9 hour shift, you divide it by 8 to find your shift number.</p>
					<p>9 / 8 =  1.125</p>
					<p>If you worked a 7 hour shift, you divide it by 8 again.</p>
					<p>	7 / 8 = 0.875</p>
					<p>Simple enought right?</p>
					<p>Now if you have tips of a 100$ total and 4 people who worked the following hours . . .
						1, 1, 1.125 and 1.5 . . . that makes a sum of 4.625 shift hours in total.
					</p>
					<p>To find the value for 1 you divide the total tips by 4.625, which is . . .</p>
					<p>. . around 21.6</p>
					<p>Now to find the value for 1.125 and 1.5 respectively, you multiply the value of 
						1 ( around 21.6  in our case ) with the shift number that the value we want to find.
					</p>
					<p>21.6 * 1.5 = 32.4</p>
					<p>21.6 * 1.125 = 24.3</p>
					<p>Now to verify our results we can add all the values to check if it adds up 100.
						As you might guessed we have to make some rounding. <br />
					21.6 + 21.6 + 24.3 + 32.4 = 99.9</p>
					<p>the rest is for the piggy bank.</p>
					<p>See? Now we brought a bit more justice to the world of tiping.</p>
					<h4>Now get back to work</h4>	
					<v-btn class="my-2" outlined color="red">
						<router-link to="/tips" class="btn__go-to-tips red--text">Get your tips</router-link>
					</v-btn>
				</v-flex>
				<v-flex xs12 sm8 class="my-5">
					<h2>Q and A</h2>
					<v-expansion-panels focusable class="mt-4">
						<v-expansion-panel v-for="(qa ,i) in qanda"	:key="i">
							<v-expansion-panel-header>{{ qa.question }}</v-expansion-panel-header>
							<v-expansion-panel-content class="pt-2">
								{{ qa.answear }}
							</v-expansion-panel-content>
						</v-expansion-panel>
					</v-expansion-panels>
					<v-btn class="mt-4" outlined color="red">
						<router-link to="/tips" class="btn__go-to-tips red--text">Contribute to our Q and A</router-link>
					</v-btn>
				</v-flex>
			</v-layout>
		</v-container>	
	</div>
</template>


<script>
	export default {
		data() {
			return {
				qanda: [
				{question: 'How this', answear: 'cause of that you dumn fuck...'},
				{question: 'How this', answear: 'cause of that you dumn fuck...'},
				{question: 'How this', answear: 'cause of that you dumn fuck...'},
				{question: 'How this', answear: 'cause of that you dumn fuck...'},
				{question: 'How this', answear: 'cause of that you dumn fuck...'},
				{question: 'How this', answear: 'cause of that you dumn fuck...'},
				]
			}
		}
	}	
</script>

<style>
.btn__go-to-tips {
	text-decoration: none;
}
</style>