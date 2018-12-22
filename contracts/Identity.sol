pragma solidity ^0.5.0;

contract Identity {
    
    struct Keys {
        string private_key;
        string public_key;
    }

    mapping (address => Keys) LinkedUser;

    function createAccount( address _ethAddress, string memory _private_key, string memory _public_key)
    public {
        Keys memory newKeys;
        newKeys.private_key = _private_key;
        newKeys.public_key = _public_key;
        LinkedUser[_ethAddress] = newKeys;
    }
    
    function signIn(address ethAddress, string memory private_key, string memory public_key)
    public
    view
    returns (bool) {
        if (c.compareStrings(LinkedUser[ethAddress].private_key, private_key) &&
            c.compareStrings(LinkedUser[ethAddress].public_key, public_key)) {
            return true;
        }
        else
            return false;
    }
}
