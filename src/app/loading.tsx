export default function Loading (): JSX.Element {
  return (
    <div className='w-full flex space-x-2 animate-pulse'>
      <div className='w-3 h-3 bg-coral-red-200 rounded-full' />
      <div className='w-3 h-3 bg-coral-red-200 rounded-full' />
      <div className='w-3 h-3 bg-coral-red-200 rounded-full' />
    </div>
  )
}
