import React, { useState } from 'react';
import { Stage, Layer, Rect, Text, Label, Tag } from 'react-konva';

function BarChart(props) {


    const [showToolTip, setShowToolTip] = useState(new Array(6).fill(false))
    const [isHover, setIsHover] = useState(false)
    const [opacity, setOpacity] = useState(new Array(6).fill(1))

    const [dimension, setDimension] = useState({ width: 460, height: 220 })

    const barNormalColor = "#EC755D"
    const maxValueBarColor = "#76B5BC"
    var barColor = barNormalColor
    const maxValue = Math.max(...props.data.map(item => item.amount))
    var offset = 3
    var width = 50.6
    var height = dimension.height
    var dataScale = 3


    const handleMouserOver = (id, event) => {
        let newState = new Array(6).fill(false)
        newState[id] = true

        let newOpacatiyLevel = new Array(6).fill(1)
        newOpacatiyLevel[id] = 0.5
        setOpacity(newOpacatiyLevel)
        setIsHover(true)
        setShowToolTip(newState)
    }

    const scale = Math.min(
        window.innerWidth / dimension.width,
        window.innerHeight / dimension.height
    );


    return (
        <Stage width={dimension.width} height={height} onMouseLeave={() => setIsHover(false)} >
            <Layer  >
                {
                    props.data.map((item) => {
                        if (item.amount === maxValue) {
                            barColor = maxValueBarColor
                        }
                        else {
                            barColor = barNormalColor
                        }
                        var elem = <React.Fragment key={item.id}>
                            <Rect
                                x={offset}
                                y={height - 25 - (item.amount * dataScale)}
                                width={width}
                                height={item.amount * dataScale}
                                opacity={isHover ? opacity[item.id] : 1}
                                fill={barColor}
                                cornerRadius={5} onMouseOver={(event) => handleMouserOver(item.id, event)}

                            />
                            <Text
                                x={offset + 12}
                                y={height - 155}
                                fill={"#92857A"}
                                text={item.day}
                                fontSize={15}
                                fontFamily={"DM Sans"}
                                lineHeight={19.53}
                            />
                            {showToolTip[item.id] && isHover ?
                                <Label x={offset + 2} y={height - 55 - item.amount * dataScale}>
                                    <Tag cornerRadius={5} fill="black" />
                                    <Text x={offset + 2} y={height - 55 - item.amount * dataScale} padding={6} text={'$' + item.amount} fill={'white'} fontSize={12} fontFamily={"DM Sans"} />
                                </Label> : null}
                        </React.Fragment>
                        offset = offset + width + 16
                        return elem
                    })
                }
            </Layer>
        </Stage >
    )

}


export default BarChart;