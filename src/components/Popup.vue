<template>
	<v-dialog v-model="dialog" width="500">
		<template v-slot:activator="{ on }">
			<v-btn color="red lighten-2" dark v-on="on">
				Add New User
			</v-btn>
		</template>

		<v-card>
			<v-card-text>
				<v-form class="px-3" ref="form">
					<v-text-field name="name" label="Name" v-model="name" prepend-icon="face" :rules="[inputRules.required, inputRules.minLength]"></v-text-field>
					<v-text-field name="hours" label="Hours" v-model="hours" prepend-icon="schedule" :rules="[inputRules.required]"></v-text-field>
				</v-form>
			</v-card-text>

			<v-divider></v-divider>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="red lighten-2" text @click="submit">
					Add user
				</v-btn>
			</v-card-actions>
		</v-card>
	</v-dialog>	
</template>

<script>
	export default {
		data() {
			return {
				dialog: false,
				name: '',
				hours: null,
				inputRules: {
					required: value => !!value || 'Required.',
					minLength: value => value.length >= 3 || 'Minimun length of 3 characters'
				}
			}
		},
		methods: {
			submit(){
				if(this.$refs.form.validate()){
					this.dialog = false;
					let overtime = '';
					if(this.hours == 1){
						overtime = 'none';
					} else if(this.hours == 1.1) {
						overtime = 'one'
					} else if(this.hours == 1.2) {
						overtime = 'two'
					} else if(this.hours == 1.3) {
						overtime = 'three'
					} else if(this.hours == 1.5) {
						overtime = 'four'
					}
					const user = {
						name: this.name,
						hours: Number(this.hours),
						overtime
					}
					this.$emit('addUser', user)
					this.$emit('userAdded')
					this.user = ''
				}
			}
		}
	}
</script>