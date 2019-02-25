#!/usr/bin/python

# bc 0xad -o decimal
#   output: 173 
# bc 11 -o hex
#   output: 0xb
# bc 42 -o bin
#   output: 101010

import sys, getopt

def main(argv):
    return

def get_opts_args(argv):
    try:
        opts, args = getopt.getopt(argv, "Vho:", 
                            ["help", "output=", "version"])
    except getopt.GetoptError as err:
        print(err)
        usage()
        sys.exit(1)

    return opts, args

if __name__ == "__main__":
    main(sys.argv[1:])

