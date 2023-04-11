import React from "react";

function Franks() {
	return (
		<div className="franks">
			<div class="flex font-sans">
				<div class="flex-none w-56 relative">
					<img src="https://tailwindcss.com/_next/static/media/kids-jumper.ff28ead2.jpg" />
				</div>
				<form class="flex-auto p-6">
					<div class="flex flex-wrap">
						<h1 class="flex-auto font-medium text-slate-900">Kids Jumpsuit</h1>
						<div class="w-full flex-none mt-3 order-1 text-3xl font-bold text-violet-600">
							$39.00
						</div>
						<div class="text-sm font-medium text-slate-400">In stock</div>
					</div>
					<div class="flex items-baseline mt-4 mb-6 pb-6 border-b border-slate-200">
						<div class="space-x-2 flex text-sm font-bold">
							<label>
								<input
									class="sr-only peer"
									name="size"
									type="radio"
									value="xs"
									
								/>
								<div class="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
									XS
								</div>
							</label>
							<label>
								<input
									class="sr-only peer"
									name="size"
									type="radio"
									value="s"
                                    checked
								/>
								<div class="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
									S
								</div>
							</label>
							<label>
								<input
									class="sr-only peer"
									name="size"
									type="radio"
									value="m"
								/>
								<div class="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
									M
								</div>
							</label>
							<label>
								<input
									class="sr-only peer"
									name="size"
									type="radio"
									value="l"
								/>
								<div class="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
									L
								</div>
							</label>
							<label>
								<input
									class="sr-only peer"
									name="size"
									type="radio"
									value="xl"
								/>
								<div class="w-9 h-9 rounded-full flex items-center justify-center text-violet-400 peer-checked:bg-violet-600 peer-checked:text-white">
									XL
								</div>
							</label>
						</div>
					</div>
					<div class="flex space-x-4 mb-5 text-sm font-medium">
						<div class="flex-auto flex space-x-4">
							<button
								class="h-10 px-6 font-semibold rounded-full bg-violet-600 text-white"
								type="submit"
							>
								Buy now
							</button>
							<button
								class="h-10 px-6 font-semibold rounded-full border border-slate-200 text-slate-900"
								type="button"
							>
								Add to bag
							</button>
						</div>
						<button
							class="flex-none flex items-center justify-center w-9 h-9 rounded-full text-violet-600 bg-violet-50"
							type="button"
							aria-label="Like"
						>
							<svg
								width="20"
								height="20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
								/>
							</svg>
						</button>
					</div>
					<p class="text-sm text-slate-500">
						Free shipping on all continental US orders.
					</p>
				</form>
			</div>
		</div>
	);
}

export default Franks;
