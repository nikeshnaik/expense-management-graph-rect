import { useEffect, useRef } from 'react'

function BarChart(props) {

    const ref = useRef("#EC755D")

    var data = props.data
    const barColor = "#EC755D"
    const maxValueBarColor = "#76B5BC"

    useEffect(() => {
        const canvas = ref.current.getContext('2d')
        var offset = 3
        var width = 30.92
        var baseline = 90
        var maxValue = 0
        maxValue = Math.max(...data.map(item => item.amount))

        data.forEach(element => {
            drawBar(canvas, offset, baseline - element.amount, width, element.amount, maxValue === element.amount)
            fillTextBelowBar(canvas, offset + 7, baseline + 10, element.day)
            offset = offset + width + 13
        });
    }, [data])


    function drawBar(canvas, posX, posY, width, height, isItMaxValue) {
        canvas.beginPath();
        canvas.lineWidth = 0.0001
        canvas.fillStyle = isItMaxValue ? maxValueBarColor : barColor
        canvas.fillRect(posX, posY, width, height)
        canvas.stroke();
    }

    function fillTextBelowBar(canvas, posX, posY, textValue) {
        canvas.font = "10px DM Sans";
        canvas.fillStyle = "#92857A";
        canvas.fillText(textValue, posX, posY);
    }


    return <canvas ref={ref} style={{ width: "100%", height: "178" }} />
}


export default BarChart;