import React, { Component,Fragment } from 'react'

export default class index extends Component {
    render() {
        return (
            // 不是遍历,一个简单的结构就一个  直接写空标签<></>
            // <>
            //     <input type="text" />
            //     <input type="text" />
            // </>

            //  Fragment 值能传key一个属性
            // 可以不用必须有一个真实的DOM根标签了
            // 如果参与遍历,每一个必须都有一个唯一的key可以写Fragment
            <Fragment key={11}>
                <input type="text" />
                <input type="text" />
            </Fragment>

            // Fragment  不会被渲染
        )
    }
}
