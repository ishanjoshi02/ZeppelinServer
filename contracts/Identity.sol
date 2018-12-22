
pragma solidity ^0.5.0;
<<<<<<< HEAD
=======
import "./Customer.sol";
>>>>>>> 63fcd68315559dffb3d0ab8fd7c67882f086a50d
//pragma experimental ABIEncoderV2;

contract Identity {
    
    Customer c;
    struct Keys {
        string private_key;
        string public_key;
    }

    mapping (address => Keys) LinkedUser;
    mapping (string => address) Account;

    function createAccount(address ethAddress, string memory _private_key, string memory _public_key)
    public {
        Keys memory newKeys;
        newKeys.private_key = _private_key;
        newKeys.public_key = _public_key;
        LinkedUser[ethAddress] = newKeys;
<<<<<<< HEAD
=======
        Account[_private_key] = ethAddress;
>>>>>>> 63fcd68315559dffb3d0ab8fd7c67882f086a50d
    }

    function signIn(address ethAddress, string memory private_key, string memory public_key)
    public
    view
    returns (bool) {
        if (compareStrings(LinkedUser[ethAddress].private_key, private_key) &&
            compareStrings(LinkedUser[ethAddress].public_key, public_key)) {
            return true;
        }
        else
            return false;
    }
<<<<<<< HEAD
    
=======

    function getAddress(string memory private_key)
    public
    view
    returns (address) {
        return Account[private_key];
    }

>>>>>>> 63fcd68315559dffb3d0ab8fd7c67882f086a50d
    function compareStrings(string memory one, string memory two)
    public
    pure
    returns (bool)
    {

        return keccak256(abi.encodePacked(one)) == keccak256(abi.encodePacked(two));

    }
<<<<<<< HEAD
}
=======
}
>>>>>>> 63fcd68315559dffb3d0ab8fd7c67882f086a50d
