import React from 'react'

const UpdateComponent = (OriginalComponent) => {
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)
            this.state = {
                count: 0
            }
        }
        incrementcount = () => {
            this.setState((prevstate) => {
                return { count: prevstate.count + 1 }
            })
        }
        render() {

            return (
                
                    <OriginalComponent
                        name="kumar reddy"
                        count={this.state.count}
                        incrementcount={this.state.incrementcount}
                    />  
            )
        }
    }

    return NewComponent
}
export default UpdateComponent