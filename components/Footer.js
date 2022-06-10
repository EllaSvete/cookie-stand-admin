export default function Footer(props) {
  return (
    <footer className='font-normal text-grey-400 px-5 py-3 bg-emerald-500'>
      <p> {props.stand_count && props.stand_count.length} Our Locations</p>
    </footer>
  )
}