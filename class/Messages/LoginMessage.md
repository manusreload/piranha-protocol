    class LoginMessage : public PiranhaMessage
    {

        void encode(Message *)
        {
            ChecksumEncoder::writeLong(LogicLong  const*)  // Account Id
            ByteStream::writeString(String *) // Pass token
            ByteStream::writeInt(int) // ClientMajorVersion
            ByteStream::writeInt(int) // (Always 0?)
            ByteStream::writeInt(int) // ClientBuild
            ByteStream::writeString(String *) // ResourceSha
            ByteStream::writeString(String *) // UDID
            ByteStream::writeString(String *) // OpenUDID
            ByteStream::writeString(String *) // MacAddress
            ByteStream::writeString(String *) // Device
            ByteStreamHelper::writeDataReference(ChecksumEncoder *,LogicData *) // PreferredLanguage
            ByteStream::writeString(String *) // PreferredDeviceLanguage
            ByteStream::writeString(String *) // ADID
            ByteStream::writeString(String *) // OSVersion
            ByteStream::writeBoolean(bool) // isAndroid
            ByteStream::writeStringReference(String  const&) // IMEI
            ByteStream::writeStringReference(String  const&) // AndroidID
        }

        void decode(Message *) // See encode for values names
        {
            ByteStream::readLong(void)
            ByteStream::readString(int)
            ByteStream::readInt(void)
            ByteStream::readInt(void)
            ByteStream::readInt(void)
            ByteStream::readString(int)
            ByteStream::readString(int)
            ByteStream::readString(int)
            ByteStream::readString(int)
            ByteStream::readString(int)
            if(!ByteStream::isAtEnd(void))
            {
                ByteStreamHelper::readDataReference(ByteStream *,int) // ????
                ByteStream::readString(int)
                LogicStringUtil::safeString(String &,String*,char  const*)
            }
            if(!ByteStream::isAtEnd(void))
            {
                ByteStream::readString(int)
            }
            if(!ByteStream::isAtEnd(void))
            {
                ByteStream::readString(int)
            }
            if(!ByteStream::isAtEnd(void))
            { 
                ByteStream::readBoolean(void)
            }
            if(!ByteStream::isAtEnd(void))
            { 
                ByteStream::readStringReference(int)
            }
            if(!ByteStream::isAtEnd(void))
            { 
                ByteStream::readStringReference(int)
            }
        }


        int getMessageType()
        {
            return 0x2775;
        }
    }