<template>
	<div class="tips">
		<h1 class="subheading grey--text">Tips</h1>

		<v-container class="my-5">
			<v-layout row wrap class="mb-3 px-3">
				<v-flex xs12 sm6>
					<span class="font-weight-bold grey--text">Sort by:</span>

					<v-tooltip top>
						<template v-slot:activator="{ on }">
							<v-btn small text color="grey" @click="sortBy('name')" v-on="on">
								<v-icon left small>face</v-icon>	
								<span class="caption text-lowercase">name</span>
							</v-btn>
						</template>
						<span>Sort by alphabetical order</span>
					</v-tooltip>
					<v-tooltip top>
						<template v-slot:activator="{ on }">							
							<v-btn small text color="grey" @click="sortBy('hours')" v-on="on">
								<v-icon left small>query_builder</v-icon>
								<span class="caption text-lowercase">hours</span>
							</v-btn>
						</template>
						<span>Sort by ammount of hours</span>
					</v-tooltip>
				</v-flex>

				<v-flex xs12 sm6>
					<v-layout row wrap justify-end>
						<Popup @addUser="addUser" />
						<v-btn color="green lighten-2 ml-2" dark @click="endDay">
							End day
						</v-btn>
					</v-layout>
				</v-flex>
			</v-layout>

			<v-card flat v-for="person in persons" :key="person.name">
				<v-layout wrap class="pa-3" :class="`hour-status ${person.overtime}`">
					<v-flex xs12 sm6>
						<div class="caption grey--text">Name</div>
						<div>{{ person.name }}</div>
					</v-flex>
					<v-flex xs6 sm3>
						<div class="caption grey--text">Hours</div>
						<div>{{ person.hours }}</div>
					</v-flex>
					<v-flex xs6 sm3>
						<div class="caption grey--text">Tips</div>
						<div>{{ person.tips }}$</div>
					</v-flex>
				</v-layout>
				<v-divider></v-divider>
			</v-card>

			<v-layout wrap class="pa-3">
				<v-flex xs12 sm6>
					<h2 class="mt-2">Total</h2>
				</v-flex>
				<v-flex xs6 sm3>
					<div class="caption black--text">Summed Hours</div>
					<h3 class="red--text">{{ total() }}{{ summedHours }}</h3>
				</v-flex>
				<v-flex xs6 sm3>
					<div class="caption black--text">Tips</div>
					<v-layout row wrap align-end>
						<h3 class="red--text pr-2">{{ daysTotal }}$</h3>
						<DaysPopup @addTotal="addTotal" />
					</v-layout>
				</v-flex>
			</v-layout>

			<v-divider class="mt-5"></v-divider>

			<v-layout row wrap justify-end class="my-5">
				<v-flex xs12 sm6>
					<div>
						<span class="font-weight-bold grey--text">Overtime status</span>
						<v-list dense row class="transparent">
							<v-list-item dense class="p-0" v-for="color in colorStatus" :key="color.text">
								<v-list-item-content>
									<v-flex>
										<span :class="`status-color ${color.color}`"></span>
										<span class="caption px-1">{{ color.text }}</span>
									</v-flex>
								</v-list-item-content>
							</v-list-item>
						</v-list>	
					</div>
				</v-flex> 
			</v-layout>
		</v-container>
	</div>
</template>

<script>
	import Popup from './Popup'
	import DaysPopup from './DaysPopup'
	export default {
		data() {
			return {
				summedHours: 0,
				daysTotal: 0,
				persons: [
				{name: 'John Raptis', hours: 1, overtime: 'none', tips: 0},
				{name: 'Clark Kent', hours: 1.2, overtime: 'two', tips: 0},
				{name: 'Anna Holmes', hours: 1.5, overtime: 'four', tips: 0},
				{name: 'Sergei Pliev', hours: 1, overtime: 'none', tips: 0},
				{name: 'Tania Rascito', hours: 1.3, overtime: 'three', tips: 0},
				],
				colorStatus: [
				{color: 'grey lighten-2', text: 'none'},
				{color: 'pink', text: 'one hour'},
				{color: 'purple', text: 'two hour'},
				{color: 'red darken-4', text: 'three hour'},
				{color: 'red', text: 'four hour'},
				]
			}
		},
		methods: {
			sortBy(prop) {
				this.persons.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
			},
			addUser(user) {
				this.persons.push(user)
			},
			addTotal(total) {
				this.daysTotal = total;
			},
			total() {
				const summedHours = this.persons.map(p => p.hours).reduce((total, amount) => total + amount)
				this.summedHours = summedHours;
			},
			endDay() {
				const fullShift = Math.round(this.daysTotal / this.summedHours);
				this.persons.map((n) => {
					return n.tips = Math.floor(n.hours * fullShift); 
				});
			},
			// userAdded() {
			// 	this.$emit('userAdded')
			// }
		},
		components: {
			Popup,
			DaysPopup
		}
	}
</script>

<style scoped>
.hour-status.none {
	border-left: 6px solid #e0e0e0;
}
.hour-status.one {
	border-left: 6px solid pink;
}
.hour-status.two {
	border-left: 6px solid purple;
}
.hour-status.three {
	border-left: 6px solid #B71C1C;
}
.hour-status.four {
	border-left: 6px solid red;
}

.status-color {
	display: inline-block;
	width: 30px;
	height: 5px;
}
</style>