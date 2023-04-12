<template>
	<section>
		<base-card>
			<h2>Submitted Experiences</h2>
			<div>
				<base-button @click="loadExperiences"
					>Load Submitted Experiences</base-button
				>
			</div>
			<p v-if="isLoading">Loading...</p>
			<ul v-else>
				<survey-result
					v-for="result in results"
					:key="result.id"
					:name="result.name"
					:rating="result.rating"
				></survey-result>
			</ul>
		</base-card>
	</section>
</template>

<script>
import axios from "axios";
import SurveyResult from "./SurveyResult.vue";

export default {
	components: {
		SurveyResult,
	},
	data() {
		return {
			results: [],
			isLoading: false,
		};
	},
	methods: {
		loadExperiences() {
			this.isLoading = true;
			axios
				.get(
					"https://vue-http-demo-165b7-default-rtdb.asia-southeast1.firebasedatabase.app/surveys.json",
					{
						name: this.enteredName,
						rating: this.chosenRating,
					}
				)
				.then((data) => {
                    if(data.status === 200) {
                        this.isLoading = false;
                        const results = [];
                        for (const id in data.data) {
                            results.push({
                                id: id,
                                name: data.data[id].name,
                                rating: data.data[id].rating,
                            });
                        }
                        this.results = results;
                    }
				});
		},
	},
	mounted() {
		this.loadExperiences();
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>