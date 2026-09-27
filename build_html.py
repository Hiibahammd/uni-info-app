import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

with open('js/app.js', 'r', encoding='utf-8') as f:
    app_js = f.read()

# Pattern to replace any <script type="text/babel"...>...</script>
pattern = r'<script type="text/babel"[^>]*>[\s\S]*?</script>'
replacement = '<script type="text/babel" data-presets="env,react">\n' + app_js + '\n</script>'

new_html = re.sub(pattern, replacement, html)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_html)

print('Updated index.html successfully! Size:', len(new_html))
