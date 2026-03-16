# Temporary compatibility patch for Liquid / Jekyll on Ruby 3.2+.
# Ruby 3.2 removed Object#tainted?, but this Liquid version still calls it
# from Liquid::Variable#taint_check. We override that method to be a no-op.

if RUBY_VERSION >= "3.2.0"
  begin
    require "liquid"

    Liquid::Variable.class_eval do
      def taint_check(_obj)
        # Skip taint checking entirely on modern Ruby.
      end
    end
  rescue LoadError
    # If Liquid isn't available for some reason, skip the patch.
  end
end

