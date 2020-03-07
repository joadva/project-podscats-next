import 'isomorphic-fetch'
export default class extends React.Component {

    //await evita enrar en callback help :V 
    static async getInitialProps() {
        let req = await fetch('https://api.audioboom.com/channels/recommended')
        let { body: channels } = await req.json()
        return { channels }
    }
    render() {
        const { channels } = this.props

        return <div>

            <header>
                Podscats
          </header>

            {channels.map((channel) => (
                <a className="channel" key={channel.id}>
                    <img src={channel.urls.logo_image.original} alt="" />
                    <h2>{channel.title}</h2>
                </a>
            ))}

            <style jsx>{`
                header {
                  color: #fff;
                  background: #8756ca;
                  padding: 15px;
                 }
                 .channel {
                     display: block;
                     border-radius: 3px;
                     box-shadow: 0px 2px 6px rgb(0,0,0,0.15);
                     margin-bottom: 0.5em;
                 }
                 .channel img {
                     width:100%;
                 }
              ` }

            </style>
            <style jsx global> {`
            body{
                margin: 0;
                font-family: system-ui;
                background: white;
            }

        `}</style>
        </div>
    }
}


