<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';
	export let form: ActionData;
</script>

<main class="flex h-full items-center justify-center">
	<div class="w-full max-w-md">
		<h1 class="mb-5 text-center font-satisfy text-5xl font-semibold text-primary">Sign in</h1>
		<form method="POST" use:enhance class="space-y-5 p-5">
			<label class="form-control">
				<div class="label pl-0 font-bold">
					<span class="label-text">Email Address</span>
				</div>
				<input
					name="email"
					type="text"
					class="input input-bordered"
					placeholder="Enter your email address"
					value={form?.data?.email ?? ''}
				/>
				{#if form?.errors?.email}
					<p class="mt-3 text-sm text-error">{form?.errors?.email[0]}</p>
				{/if}
			</label>
			<label class="form-control">
				<div class="label pl-0 font-bold">
					<span class="label-text">Password</span>
				</div>
				<input
					name="password"
					type="password"
					class="input input-bordered"
					placeholder="Enter your email password"
				/>
				{#if form?.errors?.password}
					<p class="mt-3 text-sm text-error">{form?.errors?.password[0]}</p>
				{/if}
			</label>
			<button type="submit" class="btn btn-primary w-full">Sign in</button>
		</form>
    <p class="text-center mt-5">Don't have an account? <a href="/signup" class="link link-primary">Sign up</a></p>
	</div>
</main>
