<template>
	<v-dialog v-model="dialog" width="500">
		<template v-slot:activator="{ on }">
			<v-btn class="" color="lighten-2" v-on="on">
				Days Total
			</v-btn>
		</template>

		<v-card>
			<v-card-text>
				<v-form class="px-3" ref="form">
					<v-text-field name="total" label="Days Total" v-model="daysTotal" prepend-icon="import_contacts" :rules="[inputRules.required]"></v-text-field>
				</v-form>
			</v-card-text>

			<v-divider></v-divider>

			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn color="red lighten-2" text @click="submit">
					Add Total
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
				daysTotal: null,
				inputRules: {
					required: value => !!value || 'Required.'
				}
			}
		},
		methods: {
			submit(){
				if(this.$refs.form.validate()){
					this.dialog = false;
					let total = Number(this.daysTotal)			
					this.$emit('addTotal', total)
				}
			}
		}
	}
</script>