import random

# Define your ASCII art with $ characters
ascii_art = """
  $$$$$$$                                                                                   
  $$    $$                                                                                  
  $$    $$   $$$$$$   $$    $$  $$$$$$$   $$$$$$$    $$$$$$    $$$$$$   $$$$$$$    $$$$$$   
  $$$$$$$   $$    $$  $$    $$  $$    $$  $$    $$  $$    $$  $$    $$  $$    $$  $$    $$  
  $$    $$  $$        $$    $$  $$    $$  $$    $$  $$$$$$$$  $$        $$    $$  $$$$$$$$  
  $$    $$  $$        $$    $$  $$    $$  $$    $$  $$        $$        $$    $$  $$        
  $$$$$$$   $$         $$$$$$   $$    $$  $$    $$   $$$$$$$  $$        $$    $$   $$$$$$$
"""

# Replace $ with 0 or 1 randomly
def replace_with_random(match):
    return random.choice(['0', '1'])

import re
pattern = re.compile(r'\$')
ascii_art_modified = pattern.sub(replace_with_random, ascii_art)

# Print the modified ASCII art
print(ascii_art_modified)