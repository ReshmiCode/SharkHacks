import React, {useState} from 'react'
import { Container, Header, Content, Form, Item, Input, Text, Button } from 'native-base';



export default function UserForm(props) {

    function calculatePoints() {
        let points = usualTime - 15
        return points
    }

    function hitSubmit () {
        console.log(email)
        calculatePoints()
        console.log(calculatePoints(), "points")
        props.navigation.replace("Root")
   }
    

    let [email, setEmail] = useState("")
     let [name, setName] = useState("")
     let [password, setPassword] = useState("")
     let [usualTime, setTime] = useState("")
     let [gpm, setGPM] = useState("")
    return (
        
        <Container>
            <Header><Text>Make a profile</Text></Header>
            <Content>
                <Form>
                    <Item>
                        <Text>Name</Text>
                        <Input placeholder="Your name" name="usersname"
                        onChangeText={(name) => setName(name)}/>
                    </Item>
                    <Item>
                        <Text>Email</Text>
                        <Input placeholder="Your email" email="email"
                        onChangeText={(email) => setEmail(email)}/>
                    </Item>
                    <Item>
                        <Text>Password</Text>
                        <Input placeholder="Your password" name="password"
                        onChangeText={(password) => setPassword(password)}/>
                    </Item>
                        {/* //how to get text out of native base */}
                    <Item>
                        <Text>How long is your usual shower?</Text>
                            <Input placeholder="Minutes" usualTime="usualTime"
                            onChangeText={(usualTime) => setTime(usualTime)}/>
                    </Item>
                    <Item>
                        <Text>How many gallons per minute flow from your showerhead?</Text>
                            <Input placeholder="Gallons per minute" gpm="gpm"
                            onChangeText={(gpm) => setGPM(gpm)}/>
                    </Item>
                    <Button onPress={() => hitSubmit()}>
                        <Text>Submit</Text></Button>
                </Form>
            </Content>
        </Container>
    )
}

