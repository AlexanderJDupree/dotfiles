" VIM Config File for C++ development
" Author: Alexander DuPree
 
" -----------------------------------------------------------------------------
" Plugins
" -----------------------------------------------------------------------------

" Set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'

" Coloscheme plugins
Plugin 'morhetz/gruvbox'
Plugin 'mhartington/oceanic-next'
Plugin 'sickill/vim-monokai'
Plugin 'tyrannicaltoucan/vim-deep-space'
Plugin 'arcticicestudio/nord-vim'

" Put plugins here:
Plugin 'scrooloose/nerdtree'
Plugin 'Valloric/YouCompleteMe'
Plugin 'vim-syntastic/syntastic'
Plugin 'christoomey/vim-tmux-navigator'
Plugin 'scrooloose/nerdcommenter'
Plugin 'jiangmiao/auto-pairs'
Plugin 'tpope/vim-fugitive'
Plugin 'vim-airline/vim-airline'
Plugin 'kien/ctrlp.vim'
Plugin 'tpope/vim-surround'
Plugin 'wesQ3/vim-windowswap'
Plugin 'majutsushi/tagbar'



" All Plugins must be added before the following line
call vundle#end()
filetype plugin indent on

" Brief help 
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append '!' to update or just :PluginUpdate
" :PluginSearch foo - searches for foo; append '!' to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append '!' to auto-approve


"------------------------------------------------------------------------------
" General Settings
"------------------------------------------------------------------------------

syntax on

set hidden              " Hides buffers instead of closing them
set nocompatible		"disable vi compatibility (emulation of old bugs)
set autoread			"Auto reload changed files"
set autoindent          " Use indentation of previous line
set smartindent         " Use intelligent indentation for C
set showmatch           " Highlight matching braces
set expandtab 
set shiftwidth=4
set tabstop=4			" 4 spaces for tabs everywhere
set hlsearch			" Highlight search results
set ignorecase smartcase 	" Search queries intelligently set case	
set incsearch 			" Show search results as you type
set timeoutlen=1000 ttimeoutlen=0 " Show size of visual selection
set showcmd             " Show size of visual selection
set splitright          " Open new splits to the right
set splitbelow          " Open new splits to the bottom
set lazyredraw          " reduce the redraw frequency
set wrap linebreak nolist " Achieves soft text wrapping
set pastetoggle=<F2>    " Turns off autoindent for pasting source code
set termguicolors

" Persistent undo
set undodir=~/.vim/undo/
set undofile
set undolevels=1000
set undoreload=10000

" Opens NERDTree on startup
"autocmd vimenter * NERDTree
" Closes Vim if NERDTree is the only window open
autocmd bufenter * if (winnr("$") == 1 && exists("b:NERDTree") && b:NERDTree.isTabTree()) | q | endif

let NERDTreeShowHidden = 1

"------------------------------------------------------------------------------
" Interface
"------------------------------------------------------------------------------

set number              " Enable line numbers
set scrolloff=5         " Leave 5 lines of buffer when scrolling
set sidescrolloff=10    " Leave 10 characters of horizontal buffer when scrolling

" Syntastic Settings
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*

let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_onwq = 0

" Spellcheck
if version >= 700
    set spl=en spell
    set nospell
endif

" Global variable for YCM to have semantic code completeion for C-Family languages
" This is nessisary if you don't want to add .ycm_extra_conf.py to every project folder
let g:ycm_global_ycm_extra_conf = '~/.vim/.ycm_extra_conf.py'

"------------------------------------------------------------------------------
" Colors & Formatting
"------------------------------------------------------------------------------

colorscheme deep-space
set background=dark

" Set background to tranparent
"hi Normal ctermbg=None

" Showcase comments in italics
"highlight Comment cterm=italic gui=italic

"------------------------------------------------------------------------------
" Keymappings & Macros
"------------------------------------------------------------------------------

" remap leader key
let mapleader = ","

" ctrlp fuzzy file finder
let g:ctrlp_map = '<c-p>'
let g:ctrlp_cmd = 'CtrlP'
" _ is beginning of line, + is end of line
noremap _ 0
noremap + $  

" NerdTree toggle
map <C-n> :NERDTreeToggle<CR>

" Remap escape
inoremap jj <Esc>
inoremap JJ <Esc>

" Get off my lawn 
nnoremap <Left> :echoe "Use h"<CR>
nnoremap <Right> :echoe "Use l"<CR>
nnoremap <Up> :echoe "Use k"<CR>
nnoremap <Down> :echoe "Use j"<CR>

" Dont skip lines
nnoremap j gj
nnoremap k gk

" Open .vimrc
nnoremap <leader>ev :vsplit $MYVIMRC<cr>
" Source .vimrc ( To apply changes )
nnoremap <leader>sv :source $MYVIMRC<cr>

" tagbar
map <silent> TT :TagbarToggle<CR>

" Toggle color column
command! ToggleCC :let &cc = &cc == '' ? '81' : ''
nnoremap cc :let &cc = &cc == '' ? '81': ''<CR>

" Toggle transparency
let t:is_transparent = 0
function! Toggle_transparent()
    if t:is_transparent == 0
        hi Normal ctermbg=None
        let t:is_transparent = 1
    else
        set background=dark
        let t:is_transparent = 0
    endif
endfunction
nnoremap <C-t> : call Toggle_transparent()<CR>

" Terminal Toggle
let g:term_buf = 0
let g:term_win = 0 
function! Term(height)
    if win_gotoid(g:term_win)
        hide
    else
        botright new
        exec "resize " . a:height
        try
            exec "buffer " . g:term_buf
        catch
            call termopen($SHELL, {"detach": 0})
            let g:term_buf = bufnr("")
            set nonumber
            set norelativenumber
            set signcolumn=no
        endtry
        startinsert!
        let g:term_win = win_getid()
    endif
endfunction

" Toggle terminal on/off (neovim)
nnoremap <leader>t :call Term(12)<CR>

" Terminal go back to normal mode
tnoremap <Esc> <C-\><C-n>
tnoremap :q! <C-\><C-n>:q!<CR>

" For arduino development, status bar
" my_file.ino [arduino:avr:uno] [arduino:usbtinyisp] (/dev/ttyACM0:9600)
"function! MyStatusLine()
"  let port = arduino#GetPort()
"  let line = '%f [' . g:arduino_board . '] [' . g:arduino_programmer . ']'
"  if !empty(port)
"    let line = line . ' (' . port . ':' . g:arduino_serial_baud . ')'
"  endif
"  return line
"endfunction
"setl statusline=%!MyStatusLine()

