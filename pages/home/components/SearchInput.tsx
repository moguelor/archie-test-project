import { Box, Input } from "@chakra-ui/react";

type SearchInput = {
  handleSubmit: (e: React.FormEvent) => void;
  handleChange: (text: string) => void;
};

const SearchInput = ({ handleSubmit, handleChange }: SearchInput) => {
  return (
    <Box width="100%">
      <form onSubmit={handleSubmit}>
        <Input
          marginBottom="25px"
          placeholder="Write here to find a mission and then press enter..."
          bgColor="#FFF"
          onChange={(e) => handleChange(e.target.value)}
        />
      </form>
    </Box>
  );
};

export default SearchInput;
