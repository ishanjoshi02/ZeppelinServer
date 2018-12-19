pragma solidity ^0.5.0;

contract RequestData {

    struct Request {
        address dataOwner;
        address dataConsumer;
        uint dataStore;
        string data;
    }
    //mapping (string => )
    Request[] requests;
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

    function acceptRequestAndFowrward(bool decision, string memory data)  public {
        if (decision == true) {
            emit requestDataStore(msg.sender, data);    
        }
        else {
            emit requestDenied();
        }
    }

}