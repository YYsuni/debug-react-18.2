// @ts-ignore
import { useState } from 'react'

export default function Button() {
	const [count, setCount] = useState(0)

	return (
		<button onClick={() => setCount(count + 1)} className='border py-2 px-4 rounded-lg'>
			Count: {count}
		</button>
	)
}
