import​​ React, {Component}​​ from​​ 'react';
import​​ Web3​​ from​​ 'web3';
import​​ QrReader​​ from​​ 'react-qr-reader'
import​​ ReactConfirmAlert, ​​ {confirmAlert}​​ from​​ 'react-confirm-alert';
import​​ './react-confirm-alert.css';
import​​ back​​ from​​ './back.jpg';
var​​ imgUrl = './back.jpg'
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
class​​ Qrscanner​​ extends​​ Component {
    constructor(props) {
        super(props)
        this.state​​ = ​​ {
            delay: ​​500,
            result: ​​ 'null',
            bool: ''
        }
        this.state = {
            sign: ''
        };
        this.siginhandler = this.siginhandler.bind(this);
        this.handleScan​​ = ​​this.handleScan.bind(this)
    }
    handleScan(data) {
        if (data != null) {
            console.log("heyyyy");
            this.setState({
                result: ​​data,
            });
            console.log(this.state.result);
            this.setState({
                bool: 'true',
            });
        }
    }
    handleError(err) {
        console.error(err)
    }
    siginhandler(event) {
        console.log("haiii");
        var​​ x = EC.fromWei(EC.eth.getBalance(EC.eth.accounts[0]));
        console.log(x);
        if (x > 10) {
            con.locked({
                from: EC.eth.accounts[0],
                value: EC.toWei(10)
            });
            this.setState({
                sign: "true"
            });
        } else {
            this.setState({
                sign: "false"
            });
        }
    }​​​
    submit​​ = ​​ ()​​ => ​​{
        confirmAlert({
            title: ​​ 'Confirm​ ​ to​ ​ submit',
            ​​​​​​​​​​​​​​​​​​​​​​​​​ //​ ​ Title​ ​ dialog
            message: ​​alert(this.state.result),
            //​ ​ Message​ ​ dialog
            childrenElement: ​​()​​ => ​​ < div > Are​​ You​​ Ready < /div>,
            //​ ​ Custom​ ​ UI​ ​ or​ ​ Component
            confirmLabel: ​​ 'proceed',
            //​ ​ Text​ ​ button​ ​ confirm
            cancelLabel: ​​ 'Cancel',
            //​ ​ Text​ ​ button​ ​ cancel
            onCancel: ​​()​​ => ​​alert('Action​ ​ after​ ​ Cancel'), //​ ​ Action​ ​ after​ ​ Cancel
            onConfirm​​: ​​()​​ => ​​(this.siginhandler())
        });​​
    };
    render() {
        if (this.state.sign == "false") {
            return ( <
                div >
                <
                h3 > Sorry​​ insufficient​​ balance < /h3></div >
            );
        }
        if (this.state.sign) {
            return ( <
                div >
                <
                h3 > Transcation​​ was​​ sucessful​​-- - unlocked-- - < /h3></div >
            );
        }
        const​​ previewStyle​​ = ​​ {
            height: ​​420,
            width: ​​420,
            marginLeft: ​​500,
        }
        return ( <
            section​​ style = {
                papper
            } >
            <
            div > < center > ​​​ < h1 > QR - CODE​​ SCANNER < /h1>​ ​ </center >
            <
            QrReader delay = {
                this.state.delay
            }
            style = {
                previewStyle
            }
            onError = {
                this.handleError
            }
            onScan = {
                this.handleScan
            }
            /> <
            center > ​​ < button​​ onClick = {
                this.submit
            } > Click​​ Here < /button></center >
            <
            /div> <
            /section>
        );
    }
}; //closing​ ​ of​ ​ class
export​​ default​​ Qrscanner
