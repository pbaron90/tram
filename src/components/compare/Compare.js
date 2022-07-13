import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';

const Compare = () => {
  return (
    <ReactCompareSlider
    itemOne={<ReactCompareSliderImage  src='https://www.belletag.com/wp-content/uploads/2021/04/before-after-makeup-1-1.jpg' alt='before image' />}
    itemTwo={<ReactCompareSliderImage  src='https://glaminati.com/wp-content/uploads/2022/04/tp-before-and-after-makeup-new-style.jpg' alt='after image' />}
    />
  )
}

export default Compare