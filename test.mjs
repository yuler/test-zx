#!/usr/bin/env zx

import {spinner} from 'zx/experimental'

// await spinner(() => $`long-running command`)

// With a message.
await spinner(async () => {
	await $`sleep 2`
	echo`success`
})
