<template>
	<div v-if="count >= 10">
		<p>10以上になった</p>
	</div>
</template>

<script>
export default {
	name: 'CountMessage',
	props: {
		count: {
			type: Number,
			required: true,
		},
	},
};
</script>
