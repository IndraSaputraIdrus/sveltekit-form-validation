<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<main class="flex items-center justify-center py-20">
	<div class="w-full max-w-md">
		<h1 class="mb-5 text-center font-satisfy text-5xl font-semibold text-primary">Sign up</h1>
		<form method="POST" use:enhance class="space-y-5 p-5">
			<label class="form-control">
				<div class="label pl-0 font-bold">
					<span class="label-text">Username</span>
				</div>
				<input
					name="username"
					type="text"
					class={`input ${form?.errors?.username ? 'input-error' : 'input-bordered'}`}
					placeholder="Enter your username"
					value={form?.data?.username ?? ''}
				/>
				{#if form?.errors?.username}
					<p class="mt-3 text-sm text-error">{form?.errors?.username[0]}</p>
				{/if}
			</label>
			<label class="form-control">
				<div class="label pl-0 font-bold">
					<span class="label-text">Email Address</span>
				</div>
				<input
					name="email"
					type="text"
					class={`input ${form?.errors?.email? 'input-error' : 'input-bordered'}`}
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
					placeholder="Enter your password"
					class={`input ${form?.errors?.password? 'input-error' : 'input-bordered'}`}
				/>
				{#if form?.errors?.password}
					<p class="mt-3 text-sm text-error">{form?.errors?.password[0]}</p>
				{/if}
			</label>
			<label class="form-control">
				<div class="label pl-0 font-bold">
					<span class="label-text">Confirm Password</span>
				</div>
				<input
					name="confirmPassword"
					type="password"
					class={`input ${form?.errors?.confirmPassword? 'input-error' : 'input-bordered'}`}
					placeholder="Enter your confirm password"
				/>
				{#if form?.errors?.confirmPassword}
					<p class="mt-3 text-sm text-error">{form?.errors?.confirmPassword[0]}</p>
				{/if}
			</label>

			<div class="form-control">
				<label class="label cursor-pointer justify-start gap-5">
					<input name="terms" type="checkbox"
            class={`checkbox checkbox-primary ${form?.errors?.terms && "border-error"}`}
          />
					<p class="label-text">
						I accept the <span class="text-primary">Terms of Use</span> &
						<span class="text-primary">Privacy Policy</span>
					</p>
				</label>
				{#if form?.errors?.terms}
					<p class="mt-3 text-sm text-error">{form?.errors?.terms[0]}</p>
				{/if}
			</div>

			<button type="submit" class="btn btn-primary w-full">Sign in</button>
		</form>
		<p class="mt-5 text-center">
			Already have an account? <a href="/" class="link link-primary">Sign in</a>
		</p>
	</div>
</main>
