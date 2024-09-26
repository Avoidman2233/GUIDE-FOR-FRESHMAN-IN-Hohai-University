import os
import re

# 定义需要查找和替换的内容
pattern = r" · HonKit</title>"
replacement = "</title>"

def modify_html_file(file_path):
    # 打开并读取文件内容
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()

    # 替换指定的内容
    modified_content = re.sub(pattern, replacement, content)

    # 如果内容发生了变化，则写入修改后的内容
    if modified_content != content:
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(modified_content)
        print(f"修改文件: {file_path}")

def search_and_modify_html_files(directory):
    # 递归遍历目录及其子目录
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith('.html'):
                file_path = os.path.join(root, file)
                modify_html_file(file_path)

if __name__ == "__main__":
    # 获取当前工作目录
    current_directory = os.getcwd()
    
    # 开始递归搜索和修改文件
    search_and_modify_html_files(current_directory)
