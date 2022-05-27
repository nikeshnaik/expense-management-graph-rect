import { useEffect, useRef } from 'react'

function BarChart(props) {

    const ref = useRef()

    const barColor = "#EC755D"
    const maxValueBarColor = "#76B5BC"
    let dpr = window.devicePixelRatio * 1.5

    useEffect(() => {

        var data = [...props.data]
        var canvas = ref.current.getContext('2d')
        canvas.scale(dpr, dpr);
        var canvas_height = 178 * dpr
        var offset = 3
        var width = 30.92
        var maxValue = 0
        maxValue = Math.max(...data.map(item => item.amount))


        data.forEach(element => {
            drawBar(canvas, offset, canvas_height - (element.amount * 1.5) - 170, width, (element.amount * 1.5), maxValue === element.amount)
            fillTextBelowBar(canvas, offset + 7, canvas_height - 150, element.day)
            offset = offset + width + 13
        });
    }, [dpr, props.data])


    function drawBar(canvas, posX, posY, width, height, isItMaxValue) {
        canvas.beginPath();
        canvas.lineWidth = 0.0001
        canvas.fillStyle = isItMaxValue ? maxValueBarColor : barColor
        canvas.fillRect(posX, posY, width, height)
    }

    function fillTextBelowBar(canvas, posX, posY, textValue) {
        canvas.font = "10px DM Sans";
        canvas.fillStyle = "#92857A";
        canvas.fillText(textValue, posX, posY);
    }


    const handleHover = (event) => {

        // console.log(event.clientX, event.clientY, event.target)
        event.stopPropagation()

    }


    return <canvas onMouseMove={handleHover} ref={ref} width={460 * dpr} height={178 * dpr} style={{ width: "46rem", height: "17.8rem" }} />
}


export default BarChart;