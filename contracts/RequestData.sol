pragma solidity ^0.5.0;
pragma experimental ABIEncoderV2;

contract RequestData {

    struct Transaction {
        address dataOwner;
        address dataConsumer;
        string data;
    }
    Transaction[] txs;
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
        }
        else {
            emit requestDenied();
        }
    }

    function denyRequest() public {
        emit requestDenied();
    }

    function storeTransaction(address _dataOwner, address _dataConsumer, string memory _data)
    public {
        Transaction memory newTx;
        newTx.dataOwner = _dataOwner;
        newTx.dataConsumer = _dataConsumer;
        newTx.data = _data;
        txs.push(newTx);
    }

    function getTransactions(address owner)
    public
    view
    returns (Transaction[] memory) {
        Transaction[] memory myTxs;
        uint c = 0;
        for (uint i = 0 ; i<txs.length ; i++) {
            if (txs[i].dataOwner == owner) {
                myTxs[c] = txs[i];
                c++;
            }
        }

        return myTxs;
    }

}
