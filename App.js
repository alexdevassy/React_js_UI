import​​ React, ​​ {Component}​​ from​​ 'react';
import​​ logo​​ from​​ './logo.svg';
import​​ './App.css';
import​​ Web3​​ from​​ 'web3';
import​​ ReactConfirmAlert, ​​ {confirmAlert}​​ from​​ 'react-confirm-alert';
import​​ './react-confirm-alert.css';
import​​ Qrscanner​​ from​​ './Qrscanner';
import​​ back​​ from​​ './simple.jpg';
var​​ imgUrl = './simple.jpg'
var​​ papper = {​
    width: "100%",
    ​height: "600px",
    ​backgroundImage: ​​ "url("​​ + ​​back​​ + ​​")"
};
var​​ EC = new​​ Web3(new​​ Web3.providers.HttpProvider("​ http://localhost:8545​ "))
var​​ conabi = [​​{​​
    "constant": ​​true,
    ​​"inputs": ​​[],
    ​​"name": ​​ "client",
    ​​"outputs": ​​[​​{​​
        "name": ​​ "",
        ​​"type": ​​ "address",
        ​​"value": "0x43749f680b76a9440e0355d376e9fbbe11ae7059"​​
    }​​],
    ​​"payable": ​​false,
    ​​"type": ​​ "function"​​
}, ​​ {​​
    "constant": ​​false,
    "inputs": ​​[​​{​​
        "name": ​​ "amount",
        ​​"type": ​​ "uint256"​​
    }​​],
    ​​"name": ​​ "withdraw",
    ​​"outputs": ​​[​​{​​
        "name": ​​ "",
        ​​"type": ​​ "bool"
    }​​],
    ​​"payable": ​​false,
    ​​"type": ​​ "function"​​
}, ​​ {​​
    "constant": ​​true,
    ​​"inputs": ​​[],
    ​​"name": ​​ "user",
    ​​"outputs": ​​[​​{​​
        "name": ​​ "",
        "type": ​​ "address",
        ​​"value": ​​ "0x0000000000000000000000000000000000000000"​​
    }​​],
    ​​"payable": ​​false,
    ​​"type": "function"​​
}, ​​ {​​
    "constant": ​​true,
    ​​"inputs": ​​[],
    ​​"name": ​​ "getaddr",
    ​​"outputs": ​​[​​{​​
        "name": ​​ "",
        ​​"type": ​​ "address",
        ​​"value": "0x43749f680b76a9440e0355d376e9fbbe11ae7059"​​
    }​​],
    ​​"payable": ​​false,
    ​​"type": ​​ "function"​​
}, ​​ {​​
    "constant": ​​false,
    "inputs": ​​[],
    ​​"name": ​​ "trans",
    ​​"outputs": ​​[],
    ​​"payable": ​​false,
    ​​"type": ​​ "function"​​
}, ​​ {​​
    "constant": ​​false,
    ​​"inputs": ​​[],
    "name": ​​ "locked",
    ​​"outputs": ​​[​​{​​
        "name": ​​ "",
        ​​"type": ​​ "bool"​​
    }​​],
    ​​"payable": ​​true,
    ​​"type": ​​ "function"​​
}, ​​ {​​
    "constant": true,
    ​​"inputs": ​​[],
    ​​"name": ​​ "deposit",
    ​​"outputs": ​​[​​{​​
        "name": ​​ "",
        ​​"type": ​​ "uint256",
        ​​"value": ​​ "0"​​
    }​​],
    ​​"payable": ​​false,
    "type": ​​ "function"​​
}, ​​ {​​
    "inputs": ​​[],
    ​​"payable": ​​false,
    ​​"type": ​​ "constructor"​​
}, ​​ {​​
    "anonymous": ​​false,
    ​​"inputs": ​​[​​{
        "indexed": ​​false,
        ​​"name": ​​ "data",
        ​​"type": ​​ "uint256"​​
    }​​],
    ​​"name": ​​ "ItBlinks",
    ​​"type": ​​ "event"​​
}​​]
var​​ conaddr = '0x6a600D72E00beF59b3A420cF6F9Fad441741D0e8'
var​​ con = EC.eth.contract(conabi).at(conaddr)
class​​ App​​ extends​​ React.Component​​ {
    constructor(props)​​ {
        super(props);
        this.state = {
            qrscan: ''
        };
        this.siginhandler = this.siginhandler.bind(this);
    }
    siginhandler(event) {
        console.log("first");
        this.setState({
            qrscan: "true"
        });
    }​​
    render()​​ {
        if (this.state.qrscan) {
            return (​ < Qrscanner / > );
        }
        return​​ ( <
            section​​ style = {
                papper
            } >
            <
            div​​ className = "App" >
            <
            header​​ className = "App-header" >
            <
            img​​ src = {
                logo
            }​​
            className = "App-logo"​​
            alt = "logo"​​ / >
            <
            h1​​ className = "App-title" > Welcome < /h1> <
            /header> <
            ​​button​​ onClick = {
                this.siginhandler
            }​​ > QR​​ SCANNER < /button> <
            /div> <
            /section>
        );​​
    }
}
export​​ default​​ App;
