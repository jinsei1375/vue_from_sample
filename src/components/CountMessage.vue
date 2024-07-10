<template>
	<div>
		<p>10以上になった: {{ count }}</p>
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
