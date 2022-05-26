import { useEffect, useRef } from 'react'

function BarChart(props) {

    const ref = useRef()

    var data = props.data
    const barColor = "#EC755D"
    const maxValueBarColor = "#76B5BC"
    let dpr = window.devicePixelRatio * 1.5

    useEffect(() => {
        const canvas = ref.current.getContext('2d')
        canvas.scale(dpr, dpr);
        var canvas_height = 178
        var offset = 3
        var width = 30.92
        var baseline = 90
        var maxValue = 0
        maxValue = Math.max(...data.map(item => item.amount))


        data.forEach(element => {
            drawBar(canvas, offset, canvas_height - (element.amount * 1.5) - 100, width, (element.amount * 1.5), maxValue === element.amount)
            fillTextBelowBar(canvas, offset + 7, canvas_height - 85, element.day)
            offset = offset + width + 13
        });
    }, [true])


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

    return <canvas ref={ref} width={460 * dpr} height={178 * dpr} style={{ width: "460px", height: "178px" }} />
}


export default BarChart;