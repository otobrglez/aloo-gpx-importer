#!/usr/bin/env ruby
require 'date'
require 'json'

$stdout.sync = true
$stderr.sync = true

require 'open3'

def process_cmd_path path
  # 20131111
  DateTime.strptime(
    path.match(/\/(\d+{5})/)[1],
    "%Y%m%d"
  ).strftime("%Y-%m-%d")
end

def process_cmd_distance output
  output.match(/(\d+\.(\d{3}))/)[0]
end

def process_cmd_output path, output
  path = process_cmd_path(path)
  distance = process_cmd_distance(output)
  pair = [path, distance]
  $stdout.puts "Pair: #{pair}"
  pair
end

def process_file path
  command = "./gps-distance.js #{path}"
  stdout, stderr, status = Open3.capture3(command)
  if status.success?
    process_cmd_output(path, stdout.to_s)
  else
    STDERR.puts "Failes in #{path}"
  end
end

desc "Builds list"
task :build_list do
  list = []
  files = Dir.glob("./activities/*.gpx").each do |f|
    list << process_file(f)
  end

  output = {kpis: list}

  File.open("./temp.json","w") do |f|
    f.write(output.to_json)
  end
end

#curl -XPOST -H'Content-Type: application/json' -u320c522c8:0111f1e -d$(cat temp.json) http://aloo.dev/api/kpis


