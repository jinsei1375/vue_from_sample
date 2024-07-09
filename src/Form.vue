<template>
	<div>
		<h1>Form</h1>
		<form @submit.prevent="handleSubmit">
			<label>
				Name:
				<input type="text" v-model="form.name" />
			</label>
			<br />
			<label>
				Email:
				<input type="email" v-model="form.email" />
			</label>
			<br />
			<button type="submit">確認画面へ</button>
		</form>
	</div>
</template>

<script>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default {
	setup() {
		const route = useRoute();
		const router = useRouter();
		const initialState = route.params.state || { name: '', email: '' };
		const form = ref(initialState);

		const handleSubmit = () => {
			console.log(form.value);
			router.push({ name: 'Confirm', state: { name: form.value.name, email: form.value.email } });
		};

		return { form, handleSubmit };
	},
};
</script>
