import { useRef } from 'react'

const Slide = ({
  indexImg,
  handleSlideClick,
  idSlide,
  headline,
  src,
  button,
}) => {
  let slideContent = useRef()
  let classSlide = 'slide'

  const handleMouseMove = (e) => {
    const el = slideContent.current
    const r = el.getBoundingClientRect()

    el.style.setProperty('--x', e.clientX - (r.left + Math.floor(r.width / 2)))
    el.style.setProperty('--y', e.clientY - (r.top + Math.floor(r.height / 2)))
  }

  const handleMouseLeave = (e) => {
    slideContent.current.style.setProperty('--x', 0)
    slideContent.current.style.setProperty('--y', 0)
  }

  console.log('slt', indexImg, idSlide)
  if (indexImg === idSlide) {
    classSlide += ' slide--current'
  } else if (indexImg - 1 === idSlide) {
    classSlide += ' slide--previous'
  } else if (indexImg + 1 === idSlide) {
    classSlide += ' slide--next'
  }

  return (
    <>
      <li
        ref={slideContent}
        className={classSlide}
        onClick={() => handleSlideClick(idSlide)}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseLeave={(e) => handleMouseLeave(e)}
      >
        <div className='slide__image-wrapper'>
          <img className='slide__image' alt={headline} src={src} />
        </div>

        <article className='slide__content'>
          <h2 className='slide__headline'>{headline}</h2>
          <button className='slide__action btn'>{button}</button>
        </article>
      </li>
    </>
  )
}

export default Slide
