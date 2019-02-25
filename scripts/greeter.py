#!/usr/bin/python

# Brief: Simple terminal greeter script
# Author: Alexander DuPree

import sys, getopt

class Greeter:

    def __init__(self, greeting):
        self.greeting = greeting

    def greet(self, name):
        print('{} {}'.format(self.greeting, ' '.join(name)))

def main(argv):

    opts, args = get_opts_args(argv)

    run(opts, args)

    return 0 

def run(opts, names):

    if not opts: # No options Specified, default greeting used
        greet(names)

    for opt, arg in opts:
        if opt in ('-h', '--help'):
            usage()
            sys.exit()
        elif opt in ('-g', '--greeting='):
            greet(names, arg)
        elif opt in ('-V', '--version'):
            print("Greeter v0.0.1")
    return

def get_opts_args(argv):

    try:
        opts, args = getopt.getopt(argv, "Vhg:", ["help", "greeting=", "version"])
    except getopt.GetoptError as err:
        print(err)
        usage()
        sys.exit(2)

    return opts, args

def greet(name, greeting="Hello"):

    greeter = Greeter(greeting)
    greeter.greet(name)
    return

def usage():
    print("""
            Usage:
              greeter.py [options] NAME
            
            General Options:
              -h, --help            Show help.
              -g, --greeting=<$1>   Sets greeting to $1
              -V, --version         Show version and exit.
            """)
    return

if __name__ == "__main__":
    main(sys.argv[1:])

