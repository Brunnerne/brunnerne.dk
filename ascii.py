import random

# Define your ASCII art with $ characters
ascii_art = """
  $$$$$$$$  $$$$$$$$  $$$$$$$$  $$$$$$$$  $$$$$$$$  $$$$$$$$  $$$$$$$$  $$$$$$$$  $$$$$$$$

  $$$$$$$                                                                                   
  $$    $$                                                                                  
  $$    $$   $$$$$$   $$    $$  $$$$$$$   $$$$$$$    $$$$$$    $$$$$$   $$$$$$$    $$$$$$   
  $$$$$$$   $$    $$  $$    $$  $$    $$  $$    $$  $$    $$  $$    $$  $$    $$  $$    $$  
  $$    $$  $$        $$    $$  $$    $$  $$    $$  $$$$$$$$  $$        $$    $$  $$$$$$$$  
  $$    $$  $$        $$    $$  $$    $$  $$    $$  $$        $$        $$    $$  $$        
  $$$$$$$   $$         $$$$$$   $$    $$  $$    $$   $$$$$$$  $$        $$    $$   $$$$$$$
  
  $$$$$$$$  $$$$$$$$  $$$$$$$$  $$$$$$$$  $$$$$$$$  $$$$$$$$  $$$$$$$$  $$$$$$$$  $$$$$$$$
"""

# Replace $ with 0 or 1 randomly
bits="01100010011100100111010101101110011011100110010101110010011011100110010101111011011101000110100001101001011100110101111101101001011100110101111101101110011011110111010001011111011101000110100001100101010111110110011001101100011000010110011101111101"
index=0
def getBit(match):
  global index
  # Get bit
  bit = bits[index % len(bits)]
  # Increment index
  index = index + 1
  
  # Return bit
  return bit

import re
pattern = re.compile(r'\$')
ascii_art_modified = pattern.sub(getBit, ascii_art)

# Print the modified ASCII art
print(ascii_art_modified)