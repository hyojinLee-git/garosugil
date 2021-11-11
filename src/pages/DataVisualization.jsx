
import { Button, Header } from '../style/style';

const contents=[
    {
        id:0,
        tab:'강남구',
        image:"images/가로수 수량 1위 구의 상위 종류.png"
    },
    {
        id:1,
        tab:'서초구',
        image:""
    },
    {
        id:2,
        tab:'송파구',
        image:""
    },
    {
        id:3,
        tab:'강동구',
        image:""
    },

]

const DataVisualization = () => {
    const onChangeTab=(e)=>{
        console.log(e.target)
    }
    return (
        <div>
            
            {/* nested router */}
            <Header>
                <h1>
                우리 동네에 가장 많은 
                가로수는 무엇일까?
                </h1>
            </Header>
            <div style={{paddingLeft:"10%"}}>
                <div style={{whiteSpace:"nowrap", margin:"10% 0"}}>
                {
                    contents.map((content)=><Button key={content.id} onClick={onChangeTab}>{content.tab}</Button>)
                }
                </div>
                <img src={contents[0].image} alt="now" style={{display:"block",width:"100%"}}/>
            </div>
        </div>
    );
};

export default DataVisualization;