pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract RequestData {

    struct Transaction {
        address dataOwner;
        address dataConsumer;
        string data;
    }
    string[] txs;
    // Transaction[] txs;
    mapping (string => uint) dataStores; //replace uint with endpoint?
    
    event requestDataOwner(address dataConsumer, string data);
    event requestDataStore(address dataOwner, string data);
    event requestDenied();

    constructor() public {
        dataStores["ds1"] = 1;
        dataStores["ds2"] = 2;
    }
 
    function requestDataFromOwner(string memory data) public {
        emit requestDataOwner(msg.sender, data);
    }

    function acceptRequestAndForward(bool decision, string memory data) public {
        if (decision) {
            emit requestDataStore(msg.sender, data);  

            storeTransaction(data);  
            
        }
        else {
            emit requestDenied();
        }
    }

    function denyRequest() public {
        emit requestDenied();
    }

    function storeTransaction( string memory _data)
    public
    returns (string[] memory) {
        txs.push(_data);
        // return txs;
    }

    function getTransactions()
    public
    view
    returns (string[] memory) {
        return txs;
    }

}
